import React from "react";
import { CusNavbar } from "../partials/CusNavbar";
import { Footer } from "../partials/Footer";

export const AboutMe = () => {
  return (
    <>
      <CusNavbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="text-lime-900 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Kornelius Rhesa Valdis Setyawan</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Full-Stack Web Developer 👨‍💻 || Front-End Specialist || Student at Education University of Indonesia 👨‍🎓</p>
            <a
              href="https://www.linkedin.com/in/kornelius-rhesa/"
              className=" bg-lime-700 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white border border-gray-300 rounded-lg hover:bg-lime-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Open My CV
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex h-80 ">
            <img style={{ width: "auto", height: "400px", maxHeight: "700px", position: "relative", left: "15rem", top: "-2rem" }} src="/public/jaster.png" alt="mockup" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
