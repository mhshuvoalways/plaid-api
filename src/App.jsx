import Plaid from "./components/Plaid";

const App = () => {
  return (
    <div className="flex justify-center items-center container mx-auto w-10/12 h-auto lg:h-screen gap-10 flex-wrap lg:flex-nowrap py-20">
      <img src="/logo.jpg" alt="" className="w-8/12 lg:w-4/12" />
      <div className="bg-gray-50 w-full p-10 rounded space-y-5">
        <div>
          <p className="text-lg font-medium">Name *</p>
          <input
            type="text"
            className="w-full p-1 outline-0 border focus:ring rounded mt-1"
            placeholder="Enter Your Name *"
            required
          />
        </div>
        <div>
          <p className="text-lg font-medium">Email *</p>
          <input
            type="email"
            className="w-full p-1 outline-0 border focus:ring rounded mt-1"
            placeholder="Enter Your Email *"
          />
        </div>
        <div>
          <p className="text-lg font-medium">PDF 1 *</p>
          <label>
            <input type="file" className="hidden" required accept=".pdf" />
            <p className="w-full p-1 bg-white outline-0 border focus:ring rounded mt-1 hover:bg-gray-200 cursor-pointer text-gray-500">
              Click Here To Enter Your First PDF *
            </p>
          </label>
        </div>
        <div>
          <p className="text-lg font-medium">PDF 2 *</p>
          <label>
            <input type="file" className="hidden" required accept=".pdf" />
            <p className="w-full p-1 bg-white outline-0 border focus:ring rounded mt-1 hover:bg-gray-200 cursor-pointer text-gray-500">
              Click Here To Enter Your Second PDF *
            </p>
          </label>
        </div>
        <Plaid />
      </div>
    </div>
  );
};

export default App;
