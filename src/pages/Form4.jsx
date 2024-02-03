import InputFieldwithIcon from "../components/InputFieldwithIcon";
import SelectField from "../components/SelectField";
import StepBtn from "../components/Step&Btn";
import UploadField from "../components/UploadField";

const Form1 = () => {
  return (
    <div className="p-10 rounded space-y-5 border border-gray-700">
      <p className="text-3xl text-center font-semibold">
        Upload Your Bank Statements Using Plaid
      </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>
      <SelectField title={"Country"} />
      <InputFieldwithIcon
        title={"Preferred date for chat"}
        placeholder={"dd/mm/yy"}
        icon={"fa-regular fa-calendar"}
      />
      <UploadField />
      <StepBtn nextHref="/" pageNo={4} />
    </div>
  );
};

export default Form1;
