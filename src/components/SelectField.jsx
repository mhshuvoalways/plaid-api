const SelectField = ({ title }) => {
  return (
    <div>
      <p className="text-lg">{title}</p>
      <select className="w-full p-2 outline-0 border rounded mt-1 border-gray-700 h-12">
        <option>Select one...</option>
        <option>First Choice</option>
        <option>Second Choice</option>
        <option>Third Choice</option>
      </select>
    </div>
  );
};

export default SelectField;
