// import React from 'react'
import { CusNavbar } from "../partials/CusNavbar";
import { Jumbotron } from "../partials/Home/Jumbotron";
import { NewsLetter } from "../partials/Home/NewsLetter";
import { Partner } from "../partials/Home/Partner";
import { Footer } from "../partials/Footer";

export const Home = () => {
  return (
    <>
      <header>
        <CusNavbar />
      </header>
      <Jumbotron />
      <Partner />
      <NewsLetter />
      {/* Footer */}
      <Footer />
    </>
  );
};
