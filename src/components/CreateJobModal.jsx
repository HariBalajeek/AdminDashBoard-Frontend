import React from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useJob } from "../context/JobContext";

const CreateJobModal = ({ showModal, setShowModal }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        salaryRange: {
          minSalary: data.minSalary,
          maxSalary: data.maxSalary
        }
      };
      delete formData.minSalary;
      delete formData.maxSalary;
      const response = await axios.post("http://localhost:3000/api/job/add", formData);
      console.log(response.data);
      if (response.status === 201 || response.status === 200) {
        console.log("Job created successfully");
        toast.success("Job created successfully");
        setShowModal(false);
        reset();
      } else {
        console.log("Error creating job");
        toast.error("Error creating job");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!showModal) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-[848px] h-auto rounded-[16px] p-6 shadow-xl relative">
        <h2 className="text-2xl font-semibold mb-4">Create Job Opening</h2>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-xl"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Job Title */}
          <div className="flex flex-col">
            <label className="py-1">Job Title</label>
            <input
              placeholder="Job Title"
              {...register("jobTitle", { required: "Job Title is required" })}
              className="border p-2 rounded"
            />
            {errors.jobTitle && <span className="text-red-500 text-sm">{errors.jobTitle.message}</span>}
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="py-1">Company Name</label>
            <input
              placeholder="Amazon, MicroSoft, Swiggy"
              {...register("companyName", { required: "Company Name is required" })}
              className="border p-2 rounded"
            />
            {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="py-1">Location</label>
            <select
              {...register("location", { required: "Location is required" })}
              className="border p-2 rounded"
            >
              <option value="">Choose Preferred Location</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Remote</option>
            </select>
            {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
          </div>

          {/* Job Type */}
          <div className="flex flex-col">
            <label className="py-1">Job Type</label>
            <select
              {...register("jobType", { required: "Job Type is required" })}
              className="border p-2 rounded"
            >
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Internship</option>
            </select>
            {errors.jobType && <span className="text-red-500 text-sm">{errors.jobType.message}</span>}
          </div>

          {/* Salary Range */}
          <div className="flex flex-col">
            <label className="py-1">Salary Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Salary"
                {...register("minSalary", {
                  required: "Min Salary is required",
                  min: {
                    value: 10000,
                    message: "Minimum salary should be at least ₹10,000"
                  }
                })}
                className="border p-2 rounded w-full"
              />
              {errors.minSalary && <span className="text-red-500 text-sm">{errors.minSalary.message}</span>}
              <input
                type="number"
                placeholder="Max Salary"
                {...register("maxSalary", {
                  required: "Max Salary is required",
                  min: {
                    value: 10000,
                    message: "Maximum salary should be at least ₹10,000"
                  }
                })}
                className="border p-2 rounded w-full"
              />
              {errors.maxSalary && <span className="text-red-500 text-sm">{errors.maxSalary.message}</span>}
            </div>
          </div>

          {/* Application Deadline */}
          <div className="flex flex-col">
            <label className="py-1">Application Deadline</label>
            <input
              type="date"
              {...register("applicationDeadline", { required: "Application Deadline is required" })}
              className="border p-2 rounded"
            />
            {errors.applicationDeadline && <span className="text-red-500 text-sm">{errors.applicationDeadline.message}</span>}
          </div>

          {/* Job Description */}
          <div className="flex flex-col col-span-2">
            <label className="py-1">Job Description</label>
            <textarea
              placeholder="Job Description"
              {...register("description", { required: "Job Description is required" })}
              className="border p-2 rounded h-32 resize-none"
            />
            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-between items-center mt-4">
            <button type="button" className="border px-4 py-2 rounded">
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Publish »
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default CreateJobModal;
