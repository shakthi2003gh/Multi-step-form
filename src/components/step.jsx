const Step = ({ step, name, currentStep = 1 }) => {
  const isCurrentStep = currentStep === step;

  return (
    <div className={"step" + (isCurrentStep ? " active" : "")}>
      <div className="count-circle">{step}</div>

      <div className="detail">
        <span className="count">{"step " + step}</span>
        <span className="name">{name}</span>
      </div>
    </div>
  );
};

export default Step;
