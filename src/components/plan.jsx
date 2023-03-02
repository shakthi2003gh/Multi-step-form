const Plan = ({ id, icon, title, price, offer, selected, onClick }) => {
  return (
    <div
      id={id}
      className={"plan" + (selected ? " selected" : "")}
      onClick={onClick}
    >
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
