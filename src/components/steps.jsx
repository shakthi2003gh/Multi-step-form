import Step from "./step";
const Steps = ({ currentStep }) => {
  const steps = [
    { step: 1, name: "Your info" },
    { step: 2, name: "Select plan" },
    { step: 3, name: "Add-ons" },
    { step: 4, name: "Summary" },
  ];

  return (
    <div className="steps">
      {steps.map(({ step, name }, i) => (
        <Step key={i} step={step} name={name} currentStep={currentStep} />
      ))}
    </div>
  );
};

export default Steps;
