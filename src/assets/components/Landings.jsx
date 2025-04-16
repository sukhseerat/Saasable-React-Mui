import React from "react";
import { useParams } from "react-router-dom";
import Crm from "../components/Crm"; 
import LandingAi from "../components/LandingAi";
import Crypto from "../components/Crypto";

import Hosting from "../components/Hosting";
import Pms from "../components/Pms";
import Hrm from "../components/Hrm"


const Landing = () => {
  const { landingType } = useParams();

  
  const renderLandingContent = () => {
    switch (landingType) {
      case "crm":
        return <Crm />;
      case "landingai":
        return <LandingAi />;
      case "crypto":
        return <Crypto />;
      
        case "hosting":
        return <Hosting />;
        case "pms":
        return <Pms />;  
        case "hrm":
          return <Hrm />;  
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <h1>{landingType.toUpperCase()} Landing Page</h1>
      {renderLandingContent()}
    </div>
  );
};

export default Landing;
//