import { useJob } from "../context/JobContext";
import { Range } from 'react-range';
import { toast } from "react-hot-toast";

// Mapping companyName → logo URL
const companyLogos = {
  Amazon: "https://logo.clearbit.com/amazon.com",
  Google: "https://logo.clearbit.com/google.com",
  Microsoft: "https://logo.clearbit.com/microsoft.com",
  "BlueZone Tech": "https://logo.clearbit.com/amazon.com",
};

function Home() {
  const { filteredJobs, searchJob, setSearchJob, locationFilter, setLocationFilter, jobTypeFilter, setJobTypeFilter, salaryValues, setSalaryValues,SALARY_MIN,SALARY_MAX, timeAgo } = useJob();
  const alerting = () => {
    toast.success("Job Applied Successfully")
  }

  return (
    <div className="flex-col gap-5 bg-gray-50">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 w-full py-6 bg-white border-b shadowbottom">

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </span>
          <input
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            className="placeholder-gray-400 text-sm bg-transparent focus:outline-none"
            type="text"
            placeholder="Search By Job Title, Role"
          />
        </div>

        {/* Location Filter */}
        <div className="flex items-center gap-2 border-l-0 md:border-l-2 pl-0 md:pl-5">
  <span className="text-gray-400 text-base">
    {/* Replaced <i> with SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5" // Adjusted size to match font-awesome icon size
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  </span>

  <select
    value={locationFilter}
    onChange={(e) => setLocationFilter(e.target.value)}
    className="text-sm text-gray-500 bg-transparent focus:outline-none w-36"
  >
    <option value="all">Preferred Location</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Chennai">Chennai</option>
    <option value="Remote">Remote</option>
  </select>
</div>


        {/* Job Type Filter */}
        <div className="flex items-center gap-2 border-l-0 md:border-l-2 pl-0 md:pl-5">
          <span className="text-gray-400 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          </span>
          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            className="text-sm text-gray-500 bg-transparent focus:outline-none w-36"
          >
            <option value="all">Job Type</option>
            <option value="FullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Salary Range Filter */}
        <div className="flex flex-col border-l-0 md:border-l-2 pl-0 md:pl-5">
          <div className="flex items-center gap-2 mb-2 justify-around text-black font-semibold">
            <span className="text-xs text-gray-400 mb-2">Salary Per Month</span>
            <span className="text-xs text-gray-400 mb-2">₹{salaryValues[0] / 1000}k - ₹{salaryValues[1] / 1000}k</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40">
              <Range
                step={5000}
                min={SALARY_MIN}
                max={SALARY_MAX}
                values={salaryValues}
                onChange={(values) => setSalaryValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-[1px] bg-gray-300 rounded-full"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-3 w-3 bg-black rounded-full focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="text-xs text-gray-600 whitespace-nowrap hidden">
              ₹{salaryValues[0] / 1000}k - ₹{salaryValues[1] / 1000}k
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => {
            const logo =
              companyLogos[job.companyName] ||
              "https://github.com/fluidicon.png";

              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-4 w-full"
                >
                  {/* Top Right Time Badge */}
                  <div className="absolute top-3 right-3 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">
                   {timeAgo(job.postedAt)}
                  </div>
              
                  {/* Company Logo */}
                  <div className="flex justify-start items-center mb-3">
                    <img
                      src={logo}
                      alt={`${job.companyName} Logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
              
                  {/* Job Title */}
                  <h2 className="text-lg font-semibold text-gray-800">
                    {job.jobTitle}
                  </h2>
              
                  {/* Info Row */}
                  <div className="flex items-center text-sm text-gray-600 gap-4 mt-2 font-medium ">
                    {/* Experience */}
                    <div className="flex items-center gap-1 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                        />
                      </svg>
                      <span>{job.experience || "1–3 yr Exp"}</span>
                    </div>
              
                    {/* Job Type */}
                    <div className="flex items-center gap-1 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                      <span>{job.jobType}</span>
                    </div>
              
                    {/* Salary */}
                    <div className="flex items-center gap-1 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>

                      <span>{job.salaryRange.minSalary} - {job.salaryRange.maxSalary} LPA</span>
                    </div>
                  </div>
              
                  {/* Description */}
                  <ul className="text-sm text-gray-600 list-disc list-inside mt-3 space-y-1">
                    <li>A user-friendly interface lets you browse stunning photos and videos</li>
                    <li>Filter destinations based on interests and travel style, and create personalized</li>
                  </ul>
              
                  {/* Apply Button */}
                  <button
                    onClick={alerting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 mt-4 rounded-md"
                  >
                    Apply Now
                  </button>
                </div>
              );
              
          })
        ) : (
          <div className="text-center text-gray-500 w-full">
            No jobs found
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
