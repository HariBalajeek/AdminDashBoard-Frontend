import React from 'react';

const FindJobs = () => {
  const jobs = [
    {
      companyName: "Tech Corp",
      jobTitle: "Frontend Developer",
      logo: "https://logo.clearbit.com/github.com",
      experience: "2–4 yr Exp",
      jobType: "Full-time",
      salaryRange: {
        minSalary: 6,
        maxSalary: 10
      },
    },
    {
      companyName: "Designify",
      jobTitle: "UI/UX Designer",
      logo: "https://logo.clearbit.com/behance.net",
      experience: "1–3 yr Exp",
      jobType: "Remote",
      salaryRange: {
        minSalary: 5,
        maxSalary: 8
      },
    },
    // add more jobs here
  ];

  const handleApply = () => {
    alert('Applied Successfully!');
  };

  return (
    <div className="w-full flex justify-center items-start py-10">
      <div className="w-[856px]">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Your Dream Job</h1>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-5 ring-2 ring-gray-50 shadowfor"
            >
              {/* Time Badge */}
              <div className="absolute top-3 right-3 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">
                24h Ago
              </div>

              {/* Company Logo */}
              <div className="flex items-center mb-3">
                <img
                  src={job.logo}
                  alt={`${job.companyName} Logo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              {/* Job Title */}
              <h2 className="text-xl font-semibold text-gray-800">{job.jobTitle}</h2>

              {/* Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-2 font-medium">
                {/* Experience */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  <span>{job.experience}</span>
                </div>

                {/* Job Type */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                  <span>{job.jobType}</span>
                </div>

                {/* Salary */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                  <span>{job.salaryRange.minSalary} - {job.salaryRange.maxSalary} LPA</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 mt-4 rounded-md"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
