import { formatPrice } from "../utils";
import { useState } from "react";
const FormRange = ({ labelText, name, size }) => {
  const maxPrice = 100000;
  const step = 1000;
  const [price, setPrice] = useState(maxPrice);


  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-tex capitalize font-mdt">{labelText}</span>
        <span className="label-text">{formatPrice(price)}</span>
      </label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="range"
        className={`range range-primary ${size}`}
        max={maxPrice}
        value={price}
        min={0}
        step={step}
        name={name}
      />
    </div>
  );
};
export default FormRange;
