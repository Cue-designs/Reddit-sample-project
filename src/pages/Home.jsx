import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostList from "../PostList";
import PageHeader from "../components/PageHeader";

const Home = ({ theme, toggleTheme }) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleUpdatePost = (postId, updater) => {
    setPosts((posts) => posts.map((p) => (p.id === postId ? updater(p) : p)));
  };

  const handleDeletePost = (postId) => {
    setPosts((posts) => posts.filter((p) => p.id !== postId));
  };

  const handleAddPost = (post) => {
    setPosts((posts) => [post, ...posts]);
    setSearchQuery("");
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[260px_minmax(0,1fr)_320px] gap-4 px-4 py-5 xl:px-8">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-surface bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Home
              </h2>
              <span className="rounded-full bg-surface-alt px-2 py-1 text-[11px] uppercase text-primary">
                Popular
              </span>
            </div>
            <div className="space-y-3 text-sm text-secondary">
              <Link
                to="/"
                className="block rounded-2xl bg-surface-alt px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/popular"
                className="block rounded-2xl px-3 py-2 hover:bg-surface-strong"
              >
                Popular
              </Link>
              <Link
                to="/news"
                className="block rounded-2xl px-3 py-2 hover:bg-surface-strong"
              >
                News
              </Link>
              <Link
                to="/explore"
                className="block rounded-2xl px-3 py-2 hover:bg-surface-strong"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-surface bg-surface p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="rounded-2xl px-3 py-2 hover:bg-surface-strong">
                About Reddit
              </li>
              <li className="rounded-2xl px-3 py-2 hover:bg-surface-strong">
                Advertise
              </li>
              <li className="rounded-2xl px-3 py-2 hover:bg-surface-strong">
                Developer Platform
              </li>
              <li className="rounded-2xl px-3 py-2 hover:bg-surface-strong">
                Help
              </li>
            </ul>
          </div>
        </aside>

        <main className="space-y-4">
          <div className="rounded-3xl border border-surface bg-surface p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-h)]">
                  Latest posts
                </h2>
                <p className="text-sm text-secondary">
                  Community posts from the feed
                </p>
              </div>
              <button className="rounded-full bg-[#0079d3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2]">
                Create Post
              </button>
            </div>
          </div>
          <PostList
            posts={filteredPosts}
            onUpdatePost={handleUpdatePost}
            onDeletePost={handleDeletePost}
            onAddPost={handleAddPost}
          />
        </main>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-surface bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Popular Communities
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="rounded-2xl bg-surface-alt px-3 py-3">
                r/NoStupidQuestions
              </li>
              <li className="rounded-2xl bg-surface-alt px-3 py-3">
                r/Minecraft
              </li>
              <li className="rounded-2xl bg-surface-alt px-3 py-3">
                r/Fitness
              </li>
              <li className="rounded-2xl bg-surface-alt px-3 py-3">r/DnD</li>
              <li className="rounded-2xl bg-surface-alt px-3 py-3">r/videos</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-surface bg-surface p-4 text-sm text-secondary">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-semibold text-[var(--text-h)]">
                Community rules
              </span>
            </div>
            <p className="leading-6">
              Create posts, join communities, vote on content, and reply to
              comments with a modern Reddit-style feed experience.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
