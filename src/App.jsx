import { useState } from "react";
import "./App.css";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
// import { Card } from "flowbite-react";
import { Home } from "./pages/Home";
import { JobProvider } from "./context/JobContext";
import { Joblist } from "./pages/Joblist";
import { JobDetails } from "./pages/JobDetails";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <>
      <JobProvider>
        <Routing>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutMe />} />
            <Route path="/job-list" element={<Joblist />} />
            <Route path="/job-list/:id" element={<JobDetails />} />
          </Routes>
        </Routing>
      </JobProvider>
    </>
  );
}

export default App;
