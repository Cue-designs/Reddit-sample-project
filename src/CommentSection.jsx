import React, { useState } from "react";
import CommentItem from "./CommentItem";

const CommentSection = ({ comments = [], onUpdatePost }) => {
  const [newCommentText, setNewCommentText] = useState("");

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      const newComment = {
        id: Date.now().toString(),
        text: newCommentText,
        votes: 0,
        children: [],
        timestamp: Date.now(),
      };
      onUpdatePost((p) => ({
        ...p,
        comments: [...(p.comments || []), newComment],
      }));
      setNewCommentText("");
    }
  };

  return (
    <div className="mt-5 rounded-3xl border border-surface bg-surface p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-[var(--text-h)]">
          Comments
        </h3>
        <span className="text-xs uppercase tracking-[0.2em] text-secondary">
          {comments.length} replies
        </span>
      </div>
      <div className="mb-4 space-y-3">
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="w-full rounded-2xl border border-surface bg-surface-alt p-3 text-sm text-primary focus:border-[#878a8c] focus:outline-none"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="rounded-full bg-[#0079d3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
        >
          Add Comment
        </button>
      </div>
      {comments.length === 0 ? (
        <p className="text-sm text-secondary">
          No comments yet. Be the first to reply.
        </p>
      ) : (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            level={0}
            onUpdateComment={(updater) =>
              onUpdatePost((p) => ({
                ...p,
                comments: p.comments.map((c) =>
                  c.id === comment.id ? updater(c) : c,
                ),
              }))
            }
            onDelete={() =>
              onUpdatePost((p) => ({
                ...p,
                comments: p.comments.filter((c) => c.id !== comment.id),
              }))
            }
          />
        ))
      )}
    </div>
  );
};

export default CommentSection;
