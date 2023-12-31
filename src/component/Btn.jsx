import { useNavigation } from "react-router-dom";

const Btn = ({ text, displayType }) => {
  const isSubmitting = useNavigation().state === "submitting";

  return (
    <button
      className={`btn bg-primary ${displayType  || 'btn-block'} text-white font-normal text-md uppercase `}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-spinner"></span>
      ) : (
        text 
      )}
    </button>
  );
};
export default Btn;
