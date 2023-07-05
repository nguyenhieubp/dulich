import React from "react";
import User from "./User";

const Comment = ({ comment }) => {
  return (
    <div className="mb-[1rem] border-2 p-2">
      <User></User>
      <p className="mt-[0.3rem]">"{comment}"</p>
    </div>
  );
};

export default Comment;
