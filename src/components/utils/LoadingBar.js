import React from "react";
import PropTypes from "prop-types";
const LoadingBar = ({ count, progress }) => {
  return (
    <div className="">
      <div
        style={{
          gridTemplateColumns: `repeat(${count + 1}, minmax(0, 1fr))`,
        }}
        className={` grid  `}
      >
        {[...Array(progress).keys()].map((e, i) => (
          <div key={i} className={`h-2  animate-load  bg-red-500 `}></div>
        ))}
      </div>
    </div>
  );
};
LoadingBar.propTypes = {
  count: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};
export { LoadingBar };
