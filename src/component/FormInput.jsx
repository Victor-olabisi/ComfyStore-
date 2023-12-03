const FormInput = ({ type, labelText, name }) => {
  return (
    <div className="form-control">
      <label htmlFor={labelText} className="label">
        <span className="label-text capitalize">{labelText}</span>
      </label>
      <input type={type} className="input input-bordered" name={name} />
    </div>
  );
};
export default FormInput;
