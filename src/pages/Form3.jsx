import ComSizeItem from "../components/ComSizeItem";
import InputField from "../components/InputField";
import StepBtn from "../components/Step&Btn";

const Form1 = () => {
  return (
    <div className="p-10 rounded space-y-5 border border-gray-700">
      <p className="text-3xl text-center font-semibold">Upload Document #2</p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>
      <InputField title={"What is your company name?"} />
      <div>
        <p className="text-lg">How many people are you working with?</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <ComSizeItem title={"Just me"} />
          <ComSizeItem title={"2-10"} />
          <ComSizeItem title={"11-50"} />
          <ComSizeItem title={"51-100"} />
          <ComSizeItem title={"101-500"} />
          <ComSizeItem title={"500+"} />
        </div>
      </div>
      <InputField title={"Website link"} />
      <StepBtn nextHref="/form4" pageNo={3} />
    </div>
  );
};

export default Form1;
