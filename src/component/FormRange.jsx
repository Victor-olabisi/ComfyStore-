import { formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
const FormRange = ({ labelText, name, size }) => {
  const { products } = useLoaderData();
  const maxPrice = 100000;
  const step = 1000;
  const [price, setPrice] = useState(maxPrice);
  console.log(price);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-tex capitalize font-mdt">{labelText}</span>
        <span className="label-text">{formatPrice(maxPrice)}</span>
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
