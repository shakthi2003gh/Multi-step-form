import Button from "../components/buttons";

const Navigation = ({ currentStep, setCurrentStep }) => {
  const nextStep = () => setCurrentStep((prev) => ++prev);
  const prevStep = () => setCurrentStep((prev) => --prev);

  const [label, varient] =
    currentStep !== 4 ? ["Next Step", "primary"] : ["Confirm", "secondary"];

  return (
    <div className="navigation">
      <Button label={label} varient={varient} action={nextStep} />

      {currentStep !== 1 && <Button label="Go back" action={prevStep} />}
    </div>
  );
};

export default Navigation;
