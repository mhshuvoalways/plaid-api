const ServiceItem = ({ letter, title }) => {
  return (
    <div className="bg-white flex items-center justify-center gap-2 cursor-pointer p-2 border rounded border-gray-700 h-12">
      <p className="border border-gray-700 w-8 h-8 flex justify-center items-center font-medium">
        {letter}
      </p>
      <p>{title}</p>
    </div>
  );
};

export default ServiceItem;
