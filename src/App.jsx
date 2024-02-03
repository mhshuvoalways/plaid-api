import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";

const App = () => {
  return (
    <div className="flex justify-center items-center container mx-auto w-full lg:w-5/12 py-20 px-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
