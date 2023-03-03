const AddOn = ({ id, title, description, price, selected, setAddons }) => {
  const handleChange = (e) => {
    const isAdd = e.target.checked;
    if (isAdd)
      setAddons((prev) => [...prev, { id, title, description, price }]);
    else setAddons((prev) => prev.filter((addon) => addon.id !== id));
  };

  return (
    <label className="add-on" htmlFor={id}>
      <div className="checkbox">
        <input
          id={id}
          type="checkbox"
          checked={selected}
          onChange={handleChange}
        />
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
