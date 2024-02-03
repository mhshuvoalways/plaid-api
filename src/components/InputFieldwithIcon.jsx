const InputFieldwithIcon = ({ title, icon, placeholder }) => {
  return (
    <div>
      <p className="text-lg">{title}</p>
      <div className="bg-white flex items-center gap-3 w-full p-2 outline-0 border rounded mt-1 border-gray-700 h-12">
        <i className={`${icon} text-xl`}></i>
        <input
          type="text"
          className="outline-0"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default InputFieldwithIcon;
