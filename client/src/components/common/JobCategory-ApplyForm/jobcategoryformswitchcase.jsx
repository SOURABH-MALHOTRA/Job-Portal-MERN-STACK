// ApplyFormSelector.jsx
import { useState } from "react";
import EngineeringForm from "./EngineeringForm";
import MarketingForm from "./MarketingForm";
import SalesForm from "./SalesForm";
import HRForm from "./HRForm";
import { useParams } from "react-router-dom";
function ApplyFormSelector({jobCategory}) {
const { category } = useParams();
  const renderForm = () => {
    switch (category) {
      case "Engineering":
        return <EngineeringForm />;
      case "Marketing":
        return <MarketingForm />;
      case "Sales":
        return <SalesForm />;
      
      case "Human Resources":
        return <HRForm />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      

      {renderForm()}
    </div>
  );
}

export default ApplyFormSelector;
