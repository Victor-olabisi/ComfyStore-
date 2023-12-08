const FormInput = ({ type, labelText, name, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={labelText} className="label">
        <span className="label-text capitalize">{labelText}</span>
      </label>
      <input type={type} className={`input input-bordered ${size}`} name={name} />
    </div>
  );
};
export default FormInput;
