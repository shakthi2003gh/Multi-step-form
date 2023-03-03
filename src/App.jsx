import { useState } from "react";
import Steps from "./components/steps";
import Navigation from "./sections/navigation";
import PersonalInfo from "./sections/personalInfo";
import SelectPlan from "./sections/selectPlan";
import AddOns from "./sections/addOns";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const [userInfo, setUserInfo] = useState({ name: "", email: "", number: "" });
  const [planDetails, setPlanDetails] = useState({ plan: { id: "1" } });
  const [addOns, setAddons] = useState([]);

  return (
    <div className="App">
      <Steps currentStep={currentStep} />

      <div className="main">
        {currentStep === 1 && (
          <PersonalInfo
            setIsValid={setIsValid}
            initialValue={userInfo}
            setInitialValue={setUserInfo}
          />
        )}

        {currentStep === 2 && (
          <SelectPlan
            initialValue={planDetails}
            setPlanDetails={setPlanDetails}
          />
        )}

        {currentStep === 3 && (
          <AddOns
            billingPeriod={planDetails.billingPeriod}
            selectedAddons={addOns}
            setAddons={setAddons}
          />
        )}

        <Navigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          isValid={isValid}
        />
      </div>
    </div>
  );
}

export default App;
