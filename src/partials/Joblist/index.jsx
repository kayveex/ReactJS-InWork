import { useJobContext } from "../../context/JobContext";
import { Link } from "react-router-dom";

export const JobCard = () => {
  const { jobData, fetchJobById } = useJobContext();

  // Check array atau bukan
  if (!Array.isArray(jobData)) {
    return <div>Loading or error message...</div>;
  }

  return (
    <>
      {jobData.map((job) => (
        <div key={job.id} className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg w-30 h-20 object-cover mx-auto " src={job.company_image_url} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-white">
                {job.title} ({job.job_tenure})
              </h5>
            </a>
            <p className="mb-3 font-normal text-lime-700 dark:text-gray-400">{job.company_name}</p>
            <p className="mb-3 font-bold text-lime-700 dark:text-gray-400">
              {job.company_city} | {job.job_type}
            </p>
            <Link
              onClick={() => fetchJobById(job.id)}
              to={`/job-list/${job.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              More Detail
              <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
