import React from "react";
import { CusNavbar } from "../partials/CusNavbar";
import { JobCard } from "../partials/Joblist";
import { Footer } from "../partials/Footer";

export const Joblist = () => {
  return (
    <>
      <CusNavbar />
      <h2 className=" bg-lime-100 py-14 pt-10 text-3xl font-extrabold tracking-tight leading-tight text-center text-lime-700 dark:text-white md:text-4xl">Job List 💼</h2>
      <div className="bg-lime-100 h-fit">
        <div className="px-10 py-10 gap-5 justify-center text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center ">
          <JobCard />
        </div>
      </div>
      <Footer />
    </>
  );
};
