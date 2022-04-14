import React from "react";
import { useTalkForm } from "../../hooks/useTalkForm";
import PropTypes from "prop-types";
const InputWithMultipleChoice = ({ text, id, children }) => {
  const { getData, addData } = useTalkForm();
  return (
    <div className="w-full ">
      <p className="font-bold">{text}</p>
      <ul className="my-2  grid  md:grid-cols-2 grid-cols-1 gap-4">
        {children.map((e, i) => (
          <li
            key={i}
            className="bg-gray-900 w-full text-white p-2 rounded-md flex justify-center items-center text-sm"
          >
            {" "}
            <button
              className="hover:text-red-700"
              onClick={(element) => {
                let temp = getData(id);
                if (element.currentTarget.classList.contains("text-red-500")) {
                  element.currentTarget.classList.remove("text-red-500");
                  temp.pop(e.props.id);
                } else {
                  element.currentTarget.classList.add("text-red-500");

                  temp = temp !== null ? temp : [];
                  if (!temp.find((val) => val === e)) {
                    temp.push(e.props.id);
                  }
                }
                addData(temp, id);
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
InputWithMultipleChoice.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
export { InputWithMultipleChoice };
