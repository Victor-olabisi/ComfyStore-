const FormCheckbox = ({ labelText, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label className="label" htmlFor={name}>
        <span className="label-text">{labelText}</span>
      </label>
      <input type="checkbox" className={`checkbox checkbox-primary rounded-full ${size}`} defaultChecked={defaultValue} />
    </div>
  );
};
export default FormCheckbox;
