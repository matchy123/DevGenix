"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Counter from "./Counter";

const ProgressBar = ({ value, color, extraCls, emptyFill }) => {
  return (
    <div className={`circle-progress ${extraCls ? extraCls : "one"}`}>
      <CircularProgressbar
        value={value}
        strokeWidth={7}
        styles={buildStyles({
          pathColor: color ? color : "#FFD044",
          trailColor: emptyFill ? emptyFill : "#fff",
        })}
      />{" "}
      <span className="counting">
        <Counter end={value} />
        <span>%</span>
      </span>
    </div>
  );
};
export default ProgressBar;
