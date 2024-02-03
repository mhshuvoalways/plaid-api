import InputField from "../components/InputField";
import InputFieldwithIcon from "../components/InputFieldwithIcon";
import StepBtn from "../components/Step&Btn";
import UploadField from "../components/UploadField";

const Form1 = () => {
  return (
    <div className="p-10 rounded space-y-5 border border-gray-700">
      <p className="text-3xl text-center font-semibold">
        Let’s start with your name & email
      </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>
      <InputField title={"Enter your name"} />
      <InputFieldwithIcon
        title={"Enter your email*"}
        icon="fa-regular fa-envelope"
        placeholder={"hello@relume.io"}
      />
      <UploadField />
      <StepBtn nextHref="/form2" pageNo="1" />
    </div>
  );
};

export default Form1;
