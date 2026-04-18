import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostList from "../PostList";
import PageHeader from "../components/PageHeader";

const defaultPosts = [
  {
    id: "news1",
    title: "Major breakthrough in renewable energy technology",
    content:
      "Scientists announce a new solar panel design that could reduce costs by 40%. This could revolutionize the energy sector.",
    community: "r/news",
    votes: 156,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "news2",
    title: "New space mission launches successfully",
    content:
      "NASA's latest mission to study climate change from orbit has successfully reached its destination. Early data looks promising.",
    community: "r/space",
    votes: 89,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "news3",
    title: "Tech company announces major layoffs",
    content:
      "Following recent market challenges, a major tech company has announced plans to reduce its workforce by 15%.",
    community: "r/technology",
    votes: 234,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "news4",
    title: "New medical treatment shows promising results",
    content:
      "Clinical trials for a new treatment show significant improvement in patient outcomes. Experts are cautiously optimistic.",
    community: "r/science",
    votes: 67,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "news5",
    title: "Global climate summit reaches historic agreement",
    content:
      "World leaders have agreed on new emissions targets that could help limit global warming to 1.5°C above pre-industrial levels.",
    community: "r/worldnews",
    votes: 312,
    comments: [],
    timestamp: Date.now(),
  },
];

const News = ({ theme, toggleTheme }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("newsPosts");
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        if (Array.isArray(parsedPosts)) {
          return parsedPosts;
        }
      } catch (err) {
        console.warn("Unable to parse saved posts:", err);
      }
    }
    return defaultPosts;
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("newsPosts", JSON.stringify(posts));
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

      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-4 px-4 py-5 lg:grid-cols-[minmax(0,1fr)_320px] xl:px-8">
        <main className="order-1 space-y-4">
          <div className="rounded-3xl border border-surface bg-surface p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-h)]">
                  News posts
                </h2>
                <p className="text-sm text-secondary">
                  Latest news and discussions
                </p>
              </div>
              <button className="inline-flex w-full justify-center rounded-full bg-[#0079d3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2] sm:w-auto">
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

        <aside className="order-3 space-y-4">
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

export default News;
