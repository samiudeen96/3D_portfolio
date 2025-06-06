import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <BrowserRouter basename="/3D_portfolio">
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar />
        </div>
        <div className="bg-hero bg-cover bg-no-repeat bg-center ">
            <Hero />
          </div>
        {/* <About /> */}
        <AboutMe />
        <Experience />
        <div className="relative z-0">
          <Tech />
        </div>
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* <Feedbacks />
         */}
      </div>
    </BrowserRouter>
  );
};

export default App;
