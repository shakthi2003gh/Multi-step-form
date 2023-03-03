import { useMemo } from "react";

const Summary = ({ planDetails, addons, setCurrentStep, setAddons }) => {
  const calculate = useMemo(() => {
    const planPrice = Number(planDetails.plan.price.match(/\d+/)[0]);
    const addonsTotal = addons.reduce((a, c) => {
      return a + Number(c.price.match(/\d+/)[0]);
    }, 0);

    const period = planDetails.billingPeriod === "Monthly" ? "mo" : "yr";
    return `$${planPrice + addonsTotal}/${period}`;
  }, [planDetails, addons]);

  const handleClick = () => {
    setAddons([]);
    setCurrentStep(2);
  };

  return (
    <div className="summary container">
      <h1>Finishing up</h1>

      <p>Double-check everything looks Ok before confirming</p>

      <div className="bill">
        <div className="selected-plan">
          <div>
            <div className="title">
              {planDetails.plan.title} ({planDetails.billingPeriod})
            </div>

            <a href="#" onClick={handleClick}>
              Change
            </a>
          </div>

          <div className="title">{planDetails.plan.price}</div>
        </div>

        {!!addons.length && <div className="divided"></div>}

        <div className="selected-addons">
          {addons.map((addon, i) => (
            <div key={i} className="addon">
              <div className="name">{addon.title}</div>
              <div className="price">{addon.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="total">
        <span>
          Total (per {planDetails.billingPeriod.replace("ly", "").toLowerCase()}
          )
        </span>
        <div className="price">{calculate}</div>
      </div>
    </div>
  );
};

export default Summary;
