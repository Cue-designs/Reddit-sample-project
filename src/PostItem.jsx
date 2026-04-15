import React, { useState } from "react";
import { FaShareAlt, FaCopy } from "react-icons/fa";
import VoteButtons from "./VoteButtons";
import CommentSection from "./CommentSection";

const PostItem = ({ post, onUpdatePost, onDeletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);
  const [editMedia, setEditMedia] = useState(post.media || null);

  const handleUpvote = () =>
    onUpdatePost((p) => ({ ...p, votes: p.votes + 1 }));
  const handleDownvote = () =>
    onUpdatePost((p) => ({ ...p, votes: p.votes - 1 }));

  const handleDelete = () => onDeletePost();

  const handleEdit = () => {
    if (editTitle.trim() && (editContent.trim() || editMedia)) {
      onUpdatePost((p) => ({
        ...p,
        title: editTitle,
        content: editContent,
        media: editMedia,
      }));
      setIsEditing(false);
    }
  };

  const handleShare = async () => {
    const postUrl = `${window.location.origin}/post/${post.id}`;
    const shareData = {
      title: post.title,
      text: post.content,
      url: postUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(
        `${post.title}\n\n${post.content}\n\n${postUrl}`,
      );
      alert("Post link copied to clipboard!");
    }
  };

  const handleCopy = () => {
    const postUrl = `${window.location.origin}/post/${post.id}`;
    navigator.clipboard.writeText(postUrl);
    alert("Post link copied to clipboard!");
  };

  return (
    <div className="rounded-3xl border border-surface bg-surface p-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex gap-4">
        <VoteButtons
          votes={post.votes}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        <div className="flex-1 space-y-4">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full rounded-2xl border border-surface bg-surface-alt p-3 text-sm text-primary focus:outline-none"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full rounded-2xl border border-surface bg-surface-alt p-3 text-sm text-primary focus:outline-none"
                rows={5}
              />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer rounded-2xl border border-surface bg-surface-alt px-4 py-2 text-sm text-secondary hover:bg-surface-strong transition">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Change Media</span>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (e) => {
                            setEditMedia({
                              type: file.type.startsWith("image/")
                                ? "image"
                                : "video",
                              url: e.target.result,
                              name: file.name,
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  {editMedia && (
                    <button
                      type="button"
                      onClick={() => setEditMedia(null)}
                      className="rounded-2xl border border-red-500 bg-red-500/10 px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 transition"
                    >
                      Remove Media
                    </button>
                  )}
                </div>
                {editMedia && (
                  <div className="rounded-2xl border border-surface bg-surface-alt p-3">
                    <div className="flex items-center gap-3">
                      {editMedia.type === "image" ? (
                        <img
                          src={editMedia.url}
                          alt={editMedia.name}
                          className="max-h-20 max-w-20 rounded-lg object-cover"
                        />
                      ) : (
                        <video
                          src={editMedia.url}
                          className="max-h-20 max-w-20 rounded-lg object-cover"
                          controls
                        />
                      )}
                      <div className="flex-1 text-sm text-secondary">
                        <p className="truncate">{editMedia.name}</p>
                        <p className="text-xs capitalize">
                          {editMedia.type} uploaded
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleEdit}
                  className="rounded-full bg-[#0079d3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="rounded-full bg-surface-strong px-4 py-2 text-sm font-semibold text-primary transition hover:bg-surface-alt"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-surface-alt px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary">
                  r/all
                </span>
                <span className="text-xs text-secondary">
                  {new Date(post.timestamp).toLocaleString()}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-h)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {post.content}
                </p>
                {post.media && (
                  <div className="mt-4">
                    {post.media.type === "image" ? (
                      <img
                        src={post.media.url}
                        alt={post.media.name}
                        className="max-w-full rounded-2xl border border-surface"
                      />
                    ) : (
                      <video
                        src={post.media.url}
                        controls
                        className="max-w-full rounded-2xl border border-surface"
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-primary transition hover:text-[var(--text-h)]"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="text-red-500 transition hover:text-red-400"
                >
                  Delete
                </button>
                <button
                  onClick={handleShare}
                  className="text-primary transition hover:text-[var(--text-h)] flex items-center gap-1"
                  title="Share post"
                >
                  <FaShareAlt className="text-sm" />
                  Share
                </button>
                <button
                  onClick={handleCopy}
                  className="text-primary transition hover:text-[var(--text-h)] flex items-center gap-1"
                  title="Copy link"
                >
                  <FaCopy className="text-sm" />
                  Copy
                </button>
              </div>
            </div>
          )}
          <CommentSection
            comments={post.comments}
            onUpdatePost={onUpdatePost}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
