import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";



 const JobContext = createContext()


export const JobProvider = ({children})=>{
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/job/get");
        const data = res.data;
        setJobs(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchJobs();
  }, []);
  

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);  // Update the job list with the new job
  };

  const [searchJob, setSearchJob] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const SALARY_MIN = 0;
  const SALARY_MAX = 100000;

  const [salaryValues, setSalaryValues] = useState([SALARY_MIN, SALARY_MAX]);


  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const jobMatchSearch = job.jobTitle.toLowerCase().includes(searchJob.toLowerCase());
      
      // Apply location filter only if it's not "all"
      const locationMatch = locationFilter === "all" || job.location.toLowerCase() === locationFilter.toLowerCase();
      
      // Apply job type filter only if it's not "all"
      const jobTypeMatch = jobTypeFilter === "all" || job.jobType.toLowerCase() === jobTypeFilter.toLowerCase();
      
      const salaryMinCheck = job.salaryRange.minSalary * 1000 >= salaryValues[0];
      const salaryMaxCheck = job.salaryRange.maxSalary * 1000 <= salaryValues[1];

      return jobMatchSearch && locationMatch && jobTypeMatch && salaryMinCheck && salaryMaxCheck;
    });
  }, [jobs, searchJob, locationFilter, jobTypeFilter, salaryValues]);

  const timeAgo = (postedAt) => {
    const now = new Date();
    const postDate = new Date(postedAt);
  
    // Calculate the difference in milliseconds
    const diff = now - postDate;
  
    // Convert the difference to hours
    const hours = Math.floor(diff / (1000 * 60 * 60)); // 1 hour = 1000 * 60 * 60 ms
  
    if (hours < 24) {
      return `${hours}h Ago`;
    } else {
      // If more than 24 hours, return days ago
      const days = Math.floor(hours / 24);
      return `${days}d Ago`;
    }
  };

    return(
        <JobContext.Provider value={{jobs,addJob,filteredJobs,searchJob,setSearchJob,locationFilter,setLocationFilter,jobTypeFilter,setJobTypeFilter,salaryValues,setSalaryValues,SALARY_MIN,SALARY_MAX,timeAgo}}>
            {children}
        </JobContext.Provider>
    )
}

export const useJob = () => useContext(JobContext)