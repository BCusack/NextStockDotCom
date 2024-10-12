"use client"

import React, { useState } from 'react';
import CTAComponent from "@/app/components/CTAComponent";
import AboutComponent from "@/app/components/AboutComponent";


export default function BodySectionComponent(){
    const [showCTA, setShowCTA] = useState(true);

    const toggleComponent = () => {
      setShowCTA(!showCTA);
    };
    return(
        <div className="max-w-2xl text-center">
          <div className="max-w-2xl text-center transition-all duration-500 ease-out">
            {showCTA ? <CTAComponent /> : <AboutComponent />}
          </div>
          <span className="cursor-pointer text-3xl hover:text-4xl hover:text-cyan-500 absolute  duration-500 ease-out text-grey-400 animate-easyUp" onClick={toggleComponent}>
            {showCTA ? "↓" : "↑"}
          </span>
        </div>
    )
}