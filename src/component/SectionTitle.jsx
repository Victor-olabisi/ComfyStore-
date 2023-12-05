const SectionTitle = ({text}) => {
  return (
    <div className="border-b-2 border-base-300 ">
      <h2 className="text-3xl capitalize font-semibold mb-3 tracking-wider">
        {text}{" "}
      </h2>
    </div>
  );
}
export default SectionTitle