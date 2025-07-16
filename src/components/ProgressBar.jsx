import { useMemo } from "react";

const ProgressBar = ({
  percentage,
  className = "",
  barClassName = "",
  height = "h-1",
  bgColor = "bg-gray-200",
  fillColor = "bg-Green-400",
  animated = true,
}) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = useMemo(() => {
    return Math.min(Math.max(percentage, 0), 100);
  }, [percentage]);

  const progressBarClasses = useMemo(() => {
    return `w-full ${bgColor} rounded-full ${height} ${className}`;
  }, [bgColor, height, className]);

  const fillClasses = useMemo(() => {
    return `${fillColor} ${height} rounded-full ${
      animated ? "transition-all duration-500" : ""
    } ${barClassName}`;
  }, [fillColor, height, animated, barClassName]);

  return (
    <div className={progressBarClasses}>
      <div className={fillClasses} style={{ width: `${clampedPercentage}%` }} />
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
