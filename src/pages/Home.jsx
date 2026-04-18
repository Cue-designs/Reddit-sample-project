import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostList from "../PostList";
import PageHeader from "../components/PageHeader";

const defaultPosts = [
  {
    id: "1",
    title: "What should I build next in my Minecraft world?",
    content:
      "I just finished a castle and want a fun community project. What should I add next?",
    community: "r/Minecraft",
    votes: 18,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "2",
    title: "How do I fix my workout routine?",
    content:
      "I've been stuck at the same fitness level for weeks. Any tips on staying motivated and improving results?",
    community: "r/Fitness",
    votes: 22,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "3",
    title: "Anyone know why my game crashes?",
    content:
      "My game freezes after loading the first level. I already updated drivers and restarted. What else should I try?",
    community: "r/NoStupidQuestions",
    votes: 14,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "4",
    title: "Best DnD character concepts for new players?",
    content:
      "Looking for a simple but fun character idea for a first-time DnD campaign.",
    community: "r/DnD",
    votes: 19,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "5",
    title: "Favorite viral video this week?",
    content:
      "Share the most entertaining video you've seen recently. I'm collecting fun links for the community.",
    community: "r/videos",
    votes: 11,
    comments: [],
    timestamp: Date.now(),
  },
];

const Home = ({ theme, toggleTheme }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("homePosts");
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
    localStorage.setItem("homePosts", JSON.stringify(posts));
  }, [posts]);

  const handleUpdatePost = (postId, updater) => {
    setPosts((posts) => posts.map((p) => (p.id === postId ? updater(p) : p)));
  };

  const handleDeletePost = (postId) => {
    setPosts((posts) => posts.filter((p) => p.id !== postId));
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
                  Latest posts
                </h2>
                <p className="text-sm text-secondary">
                  Community posts from the feed
                </p>
              </div>
              <Link
                to="/create"
                className="inline-flex w-full justify-center rounded-full bg-[#0079d3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1781f2] sm:w-auto"
              >
                Create Post
              </Link>
            </div>
          </div>
          <PostList
            posts={filteredPosts}
            onUpdatePost={handleUpdatePost}
            onDeletePost={handleDeletePost}
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

export default Home;
