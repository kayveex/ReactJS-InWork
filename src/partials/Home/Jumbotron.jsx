// import React from "react";

export const Jumbotron = () => {
  return (
    <>
      <section className="bg-lime-100 dark:bg-gray-900 px-12 pt-12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-lime-800">Find a job that suits your interest & skills.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              InWork is a leading platform that offers comprehensive insights into job opportunities and companies in the employment landscape. As a job seeker or employer, you'll find valuable resources tailored to your needs.
            </p>
            <a
              href="/job-list"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
            >
              Job List
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-lime-900 border border-lime-900 rounded-lg hover:bg-lime-200 focus:ring-4 focus:ring-lime-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Dashboard
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/Illustration.png" alt="illust" />
          </div>
        </div>
      </section>
    </>
  );
};
