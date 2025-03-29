import { BrowserRouter } from "react-router-dom";

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

const App = () => {
  return (
    <BrowserRouter basename="/3D_portfolio">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="pt-25 sm:pt-5">
            <Hero />
          </div>
        </div>

        <About />
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
