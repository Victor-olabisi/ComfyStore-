const FormSelect = ({ name, labelText, size, list, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{labelText}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select-bordered select ${size} `}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
