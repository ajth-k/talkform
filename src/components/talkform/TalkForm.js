import React from "react";
import { LoadingBar } from "../utils/LoadingBar";
import { useState } from "react";
import PropTypes from "prop-types";
import { useTalkForm } from "../../hooks/useTalkForm";
import { TalkFormBox } from "../utils/TalkFormBox";

const TalkForm = ({ children, avatar, exitAction }) => {
  const [count, setcount] = useState(0);
  const [error, seterror] = useState(null);
  const { data, getData, clear } = useTalkForm();

  return (
    <div className=" min-h-screen bg-white lg:w-10/12 w-11/12  m-auto  ">
      <LoadingBar progress={count + 1} count={children.length - 1} />
      <div className=" min-h-screen flex justify-center items-center">
        <div className="   relative my-4  ">
          <TalkFormBox
            avatar={avatar}
            error={error}
            count={count}
            list={children}
          />
          {error !== null && (
            <p className="text-center my-2 text-sm  text-red-500 font-mono">
              {error}
            </p>
          )}

          <div className="flex justify-center items-center my-2">
            <button
              className="bg-red-500 p-1  rounded-full  hover:bg-red-700 "
              onClick={() => {
                if (count < children.length - 1) {
                  if (
                    !children[count].props.validator ||
                    children[count].props.validator(
                      getData(children[count].props.id)
                    )
                  ) {
                    setcount(count + 1);
                    seterror(null);
                  } else {
                    seterror(children[count].props.message);
                  }
                } else {
                  const dataCopy = Array.from(data);
                  clear();
                  exitAction(dataCopy);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#fff]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TalkForm.prototype = {
  children: PropTypes.array.isRequired,
  avatar: PropTypes.string,
  exitAction: PropTypes.func.isRequired,
};
export { TalkForm };
