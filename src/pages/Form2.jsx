import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import StepBtn from "../components/Step&Btn";
import ServiceItem from "../components/ServiceItem";
import UploadField from "../components/UploadField";

const Form1 = () => {
  return (
    <div className="p-10 rounded space-y-5 border border-gray-700">
      <p className="text-3xl text-center font-semibold">Upload Document #1</p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>
      <div>
        <p className="text-lg">Service type</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <ServiceItem letter={"A"} title={"Website desing"} />
          <ServiceItem letter={"B"} title={"Webflow development"} />
          <ServiceItem letter={"C"} title={"Custom code solutions"} />
          <ServiceItem letter={"D"} title={"Other"} />
        </div>
      </div>
      <SelectField title={"Your budget"} />
      <InputField title={"About the project"} />
      <UploadField />
      <StepBtn nextHref="/form3" pageNo={2} />
    </div>
  );
};

export default Form1;
