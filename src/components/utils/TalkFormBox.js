import React from "react";
import avatarIcon from "../../assets/avatar.png";
import PropTypes from "prop-types";
const TalkFormBox = ({ avatar, count, error, list }) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row">
      <div className="h-full flex items-center my-2 md:my-0">
        <img
          src={avatar === undefined ? avatarIcon : avatar}
          alt="chat"
          className="w-12 h-12 rounded-full  border-2 border-black"
        />
      </div>
      <div
        className={`bg-gray-800   flex justify-center items-center text-white p-2 px-4  mx-4 rounded-lg  ${
          error !== null && " animate-spin-slow border-red-500 border-4 "
        } `}
      >
        {list[count]}
      </div>
    </div>
  );
};
TalkFormBox.propTypes = {
  avatar: PropTypes.string,
  count: PropTypes.number.isRequired,
  error: PropTypes.string,
  list: PropTypes.array.isRequired,
};
export { TalkFormBox };
