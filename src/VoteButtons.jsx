import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const VoteButtons = ({ votes, onUpvote, onDownvote }) => {
  return (
    <div className="flex flex-col items-center mr-2">
      <button
        onClick={onUpvote}
        className="text-secondary hover:text-orange-500 transition-colors p-2 rounded-full"
        title="Upvote"
      >
        <FaThumbsUp className="text-lg" />
      </button>
      <span className="text-sm font-bold text-primary my-1">{votes}</span>
      <button
        onClick={onDownvote}
        className="text-secondary hover:text-blue-500 transition-colors p-2 rounded-full"
        title="Downvote"
      >
        <FaThumbsDown className="text-lg" />
      </button>
    </div>
  );
};

export default VoteButtons;
