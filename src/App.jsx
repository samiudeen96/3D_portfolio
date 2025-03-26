import { BrowserRouter } from "react-router-dom";

import { useState } from 'react'

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
  const [showContent, setShowContent] = useState(false);
  console.log("showContent", showContent);
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="pt-25 sm:pt-16">
            <Hero setShowContent={setShowContent} />
          </div>
        </div>
        {/* {showContent ?  <About showContent={showContent} /> : <span>Not working</span>} */}

        <About showContent={showContent} />

        
        {/*   <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
