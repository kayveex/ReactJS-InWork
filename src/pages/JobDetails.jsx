import React from "react";
import { CusNavbar } from "../partials/CusNavbar";
import { useParams } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import { Footer } from "../partials/Footer";

export const JobDetails = () => {
  const { id } = useParams();
  const { selectedJob, fetchJobById } = useJobContext();

  React.useEffect(() => {
    fetchJobById(id);
  }, [id, fetchJobById]);

  if (!selectedJob) {
    return <div>Loading...</div>;
  }

  // Fungsi untuk mengubah angka menjadi format mata uang Rupiah
  function formatCurrency(amount) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);
  }

  // Fungsi untuk menampilkan status dengan warna yang sesuai
  function renderJobStatus(status) {
    if (status === 1) {
      return <span className="text-green-600">Open</span>;
    } else if (status === 0) {
      return <span className="text-red-600">Closed</span>;
    }
    return null;
  }

  return (
    <>
      <div className="bg-lime-100">
        <CusNavbar />
        <section className="flex my-10 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-1/2 p-4">
            <img className="rounded-t-lg w-50 h-50 object-cover mx-auto " src={selectedJob.company_image_url} alt="" />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="text-lime-800 font-black text-4xl pt-8 pb-2">{selectedJob.title}</h1>
            <h2 className="font-bold text-xl text-lime-700">
              {selectedJob.company_name} - {selectedJob.job_tenure}
            </h2>
            <p className="font-bold text-lg text-gray-500">
              🏢 : {selectedJob.company_city} | 💼 : {selectedJob.job_type}
            </p>
            <p className="font-bold text-lg py-2">Status: {renderJobStatus(selectedJob.job_status)}</p>
            <h3 className="font-bold text-xl py-2">Description: </h3>
            <p>{selectedJob.job_description}</p>
            <h3 className="font-bold text-xl py-2">Salary: </h3>
            <p>
              {formatCurrency(selectedJob.salary_min)} - {formatCurrency(selectedJob.salary_max)}
            </p>
            <h3 className="font-bold text-xl py-2">Qualification: </h3>
            <p>{selectedJob.job_qualification}</p>
            <div className="flex justify-end py-4 pr-6">
              <a
                href="/job-list"
                className="inline-flex items-center px-5  py-3 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Apply Now !
                <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
