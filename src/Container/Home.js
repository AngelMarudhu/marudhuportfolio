import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import ProjectCards from "./ProjectCards";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div id="main">
        <Main />
      </div>
      <div>
        <ProjectCards />
      </div>
      <div>
        <About />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
