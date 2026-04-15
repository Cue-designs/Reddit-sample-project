import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PostForm from "../PostForm";

const CreatePost = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  const handleAddPost = (post) => {
    const savedPosts = localStorage.getItem("posts");
    const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];
    const updatedPosts = [post, ...parsedPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-surface">
          <h1 className="text-3xl font-semibold text-[var(--text-h)]">
            Create a post
          </h1>
          <p className="mt-4 leading-7 text-secondary">
            Use this page to create a new post. Once submitted, it will appear
            in the main feed.
          </p>
          <div className="mt-8">
            <PostForm onAddPost={handleAddPost} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
