import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}

export function JobProvider({ children }) {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((response) => {
        setJobData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  };

  const fetchJobById = (id) => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((response) => {
        setSelectedJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job by ID:", error);
      });
  };

  return <JobContext.Provider value={{ jobData, selectedJob, fetchJobData, fetchJobById }}>{children}</JobContext.Provider>;
}
