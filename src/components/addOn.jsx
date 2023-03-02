const AddOn = ({ id, title, description, price }) => {
  return (
    <label className="add-on" htmlFor={id}>
      <div className="checkbox">
        <input type="checkbox" id={id} />
      </div>

      <div className="details">
        <div className="title">{title}</div>
        <p>{description}</p>
      </div>

      <div className="price">{price}</div>
    </label>
  );
};

export default AddOn;
