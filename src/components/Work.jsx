import "./WorkCardStyles.css";
// import pro1 from "../assets/project1.png";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
// import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view1={val.view1}
              view2={val.view2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
