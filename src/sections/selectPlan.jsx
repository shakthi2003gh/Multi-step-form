import { useEffect, useState } from "react";
import Plan from "./../components/plan";
import Toggle from "./../components/toggle";

const SelectPlan = ({ initialValue, setPlanDetails }) => {
  const [billingPeriod, setBillingPeriod] = useState(
    initialValue.billingPeriod || "Monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState(initialValue.plan.id || "1");
  const Plans = [
    {
      id: "1",
      icon: "/assets/icon-arcade.svg",
      title: "Arcade",
      price: billingPeriod === "Monthly" ? "$9/mo" : "$90/yr",
      offer: billingPeriod === "Monthly" ? "" : "2 months free",
      selected: "1" === selectedPlan,
    },
    {
      id: "2",
      icon: "/assets/icon-advanced.svg",
      title: "Advanced",
      price: billingPeriod === "Monthly" ? "$9/mo" : "$120/yr",
      offer: billingPeriod === "Monthly" ? "" : "2 months free",
      selected: "2" === selectedPlan,
    },
    {
      id: "3",
      icon: "/assets/icon-pro.svg",
      title: "Pro",
      price: billingPeriod === "Monthly" ? "$9/mo" : "$150/yr",
      offer: billingPeriod === "Monthly" ? "" : "2 months free",
      selected: "3" === selectedPlan,
    },
  ];

  useEffect(() => {
    setPlanDetails({
      plan: Plans.filter(({ id }) => id === selectedPlan)[0],
      billingPeriod,
    });
  }, [selectedPlan, billingPeriod]);

  const handleSelect = (e) => {
    setSelectedPlan(e.target.closest(".plan").id);
  };

  const handleToggle = () => {
    setBillingPeriod((prev) => (prev === "Monthly" ? "Yearly" : "Monthly"));
  };

  return (
    <div className="select-plan container">
      <h1>Select your plan</h1>

      <p>you have the option of monthly or yearly billing</p>

      <div className="plans">
        {Plans.map((plan, i) => (
          <Plan key={i} {...plan} onClick={handleSelect} />
        ))}
      </div>

      <div className="billing-period">
        <span className={billingPeriod === "Monthly" ? "title" : ""}>
          Monthly
        </span>
        <Toggle onChange={handleToggle} toggled={billingPeriod === "Yearly"} />
        <span className={billingPeriod === "Yearly" ? "title" : ""}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
