import { Link, useNavigate } from "react-router-dom";

const StepBtn = ({ nextHref, pageNo }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <p>Step {pageNo}/4</p>
      <div className="flex items-center gap-5">
        <button className="btn" onClick={() => navigate(-1)}>
          Cancel
        </button>

        <Link to={nextHref}>
          <button className="btn">
            {nextHref === "/" ? "Get started" : "Next"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StepBtn;
