import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTalkForm } from "../../hooks/useTalkForm";

const InputWithText = ({ children, id }) => {
  const [userInput, setuserInput] = useState("");
  const { addData } = useTalkForm();
  return (
    <div className=" ">
      {children}
      <div className="flex">
        <input
          onChange={(e) => {
            setuserInput(e.target.value);
            addData(userInput, id);
          }}
          type={"text"}
          className="border-2 rounded bg-transparent p-1 mb-1"
        />
      </div>
    </div>
  );
};
InputWithText.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export { InputWithText };
