const Plan = ({ icon, title, price, offer, selected }) => {
  return (
    <div className={"plan" + (selected ? " selected" : "")}>
      <img src={icon} alt="" />

      <div className="details">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
        {offer && <span className="offer">{offer}</span>}
      </div>
    </div>
  );
};

export default Plan;
