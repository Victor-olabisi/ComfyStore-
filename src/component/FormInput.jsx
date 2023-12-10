const FormInput = ({ type, labelText, name, size, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={labelText} className="label">
        <span className="label-text capitalize">{labelText}</span>
      </label>
      <input type={type} className={`input input-bordered ${size}`} name={name} defaultValue={defaultValue}/>
    </div>
  );
};
export default FormInput;
