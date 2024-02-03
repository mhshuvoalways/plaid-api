const InputField = ({ title, placeholder }) => {
  return (
    <div>
      <p className="text-lg">{title}</p>
      <input
        type="text"
        className="w-full p-2 outline-0 border rounded mt-1 border-gray-700 h-12"
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
