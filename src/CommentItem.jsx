import React, { useState } from "react";
import VoteButtons from "./VoteButtons";

const CommentItem = ({ comment, level, onUpdateComment, onDelete }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleUpvote = () =>
    onUpdateComment((c) => ({ ...c, votes: c.votes + 1 }));
  const handleDownvote = () =>
    onUpdateComment((c) => ({ ...c, votes: c.votes - 1 }));

  const handleReply = () => {
    if (replyText.trim()) {
      const newComment = {
        id: Date.now().toString(),
        text: replyText,
        votes: 0,
        children: [],
        timestamp: Date.now(),
      };
      onUpdateComment((c) => ({ ...c, children: [...c.children, newComment] }));
      setReplyText("");
      setIsReplying(false);
    }
  };

  const handleEdit = () => {
    if (editText.trim()) {
      onUpdateComment((c) => ({ ...c, text: editText }));
      setIsEditing(false);
    }
  };

  const handleDelete = () => onDelete();

  return (
    <div
      className="border-l-2 border-surface-alt pl-4 mb-4"
      style={{ marginLeft: level * 18 }}
    >
      <div className="flex gap-3">
        <VoteButtons
          votes={comment.votes}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        <div className="flex-1 rounded-3xl border border-surface bg-surface-alt p-4">
          {isEditing ? (
            <div>
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-2 border border-surface rounded bg-surface text-primary"
              />
              <button
                onClick={handleEdit}
                className="mr-2 bg-[#0079d3] text-white px-2 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-surface-strong text-primary px-2 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <p className="text-primary">{comment.text}</p>
          )}
          <div className="text-xs text-secondary mt-1">
            {new Date(comment.timestamp).toLocaleString()}
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="ml-2 text-[#0079d3]"
            >
              Reply
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="ml-2 text-[#0079d3]"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="ml-2 text-red-500">
              Delete
            </button>
          </div>
          {isReplying && (
            <div className="mt-2">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-2 border border-surface rounded bg-surface text-primary"
              />
              <button
                onClick={handleReply}
                className="mr-2 bg-[#0079d3] text-white px-2 py-1 rounded mt-1"
              >
                Reply
              </button>
              <button
                onClick={() => setIsReplying(false)}
                className="bg-surface-strong text-primary px-2 py-1 rounded mt-1"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      {comment.children.map((child) => (
        <CommentItem
          key={child.id}
          comment={child}
          level={level + 1}
          onUpdateComment={(updater) =>
            onUpdateComment((c) => ({
              ...c,
              children: c.children.map((ch) =>
                ch.id === child.id ? updater(ch) : ch,
              ),
            }))
          }
          onDelete={() =>
            onUpdateComment((c) => ({
              ...c,
              children: c.children.filter((ch) => ch.id !== child.id),
            }))
          }
        />
      ))}
    </div>
  );
};

export default CommentItem;
