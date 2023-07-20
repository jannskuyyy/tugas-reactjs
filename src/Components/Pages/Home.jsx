import React from "react";
import Navbar from "../Layouts/NavbarHome";
import Footer from "../Layouts/Footer";
import Landing from "../Layouts/Landing";
import NavbarHome from "../Layouts/NavbarHome";

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
