import React, { useState } from "react";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newPost = {
        id: Date.now().toString(),
        title,
        content,
        media,
        votes: 0,
        timestamp: Date.now(),
        comments: [],
      };
      onAddPost(newPost);
      setTitle("");
      setContent("");
      setMedia(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMedia({
          type: file.type.startsWith("image/") ? "image" : "video",
          url: e.target.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeMedia = () => {
    setMedia(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-surface bg-surface p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-h)]">
            Create a post
          </h2>
          <p className="text-sm text-secondary">
            Share something with the community. Title is required; body is
            optional.
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full rounded-2xl border border-surface bg-surface-alt p-3 text-sm text-primary outline-none focus:border-[#878a8c]"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post content"
          className="w-full min-h-[120px] rounded-2xl border border-surface bg-surface-alt p-3 text-sm text-primary outline-none focus:border-[#878a8c]"
          rows={4}
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
              <span>Upload Image/Video</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {media && (
              <button
                type="button"
                onClick={removeMedia}
                className="rounded-2xl border border-red-500 bg-red-500/10 px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 transition"
              >
                Remove Media
              </button>
            )}
          </div>
          {media && (
            <div className="rounded-2xl border border-surface bg-surface-alt p-3">
              <div className="flex items-center gap-3">
                {media.type === "image" ? (
                  <img
                    src={media.url}
                    alt={media.name}
                    className="max-h-20 max-w-20 rounded-lg object-cover"
                  />
                ) : (
                  <video
                    src={media.url}
                    className="max-h-20 max-w-20 rounded-lg object-cover"
                    controls
                  />
                )}
                <div className="flex-1 text-sm text-secondary">
                  <p className="truncate">{media.name}</p>
                  <p className="text-xs capitalize">{media.type} uploaded</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="rounded-full bg-[#0079d3] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
        >
          Submit Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
