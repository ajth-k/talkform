import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTalkForm } from "../../hooks/useTalkForm";

const InputWithChoice = ({ text, id, values }) => {
  const { addData } = useTalkForm();
  const [valSelect, setvalSelect] = useState(values[0]);
  // useEffect(() => {
  //   addData(valSelect, id);
  // }, [addData, id, valSelect]);

  return (
    <div className="">
      <p>{text}</p>
      <div className="flex">
        <select
          value={valSelect}
          onChange={(e) => {
            setvalSelect(e.target.value);
          }}
          className={` text-white bg-gray-800  border-2 rounded`}
        >
          {values.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

InputWithChoice.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};
export { InputWithChoice };
