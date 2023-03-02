import AddOn from "./../components/addOn";

const AddOns = ({ billingPeriod = "Monthly" }) => {
  const addons = [
    {
      id: "1",
      title: "Online service",
      description: "Access to multiplayer games",
      price: billingPeriod === "Monthly" ? "+$1/mo" : "+$10/yr",
    },
    {
      id: "2",
      title: "Large storage",
      description: "Extra 1TB of cloud save",
      price: billingPeriod === "Monthly" ? "+$2/mo" : "+$20/yr",
    },
    {
      id: "3",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: billingPeriod === "Monthly" ? "+$2/mo" : "+$20/yr",
    },
  ];

  return (
    <div className="pick-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming exprience.</p>

      <div className="add-ons">
        {addons.map((addon, i) => (
          <AddOn key={i} {...addon} />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
