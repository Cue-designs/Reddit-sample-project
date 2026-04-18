import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostList from "../PostList";
import PageHeader from "../components/PageHeader";

const defaultPosts = [
  {
    id: "explore1",
    title: "Hidden gems: Underrated hiking trails near you",
    content:
      "Share your favorite lesser-known hiking spots that deserve more attention. What's that trail that always feels like a secret?",
    community: "r/hiking",
    votes: 45,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "explore2",
    title: "What's the most interesting fact you know?",
    content:
      "Share something fascinating that most people don't know. Bonus points if it's something you can verify!",
    community: "r/todayilearned",
    votes: 78,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "explore3",
    title: "Show off your photography skills!",
    content:
      "Post your best photos from this week. Any theme, any subject. Let's see what you've captured!",
    community: "r/photography",
    votes: 92,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "explore4",
    title: "What's your go-to comfort food recipe?",
    content:
      "Share your favorite recipe that always makes you feel better. Include ingredients and instructions!",
    community: "r/recipes",
    votes: 134,
    comments: [],
    timestamp: Date.now(),
  },
  {
    id: "explore5",
    title: "Weird dreams you've had recently",
    content:
      "What's the strangest dream you've had lately? Let's share our subconscious adventures!",
    community: "r/Dreams",
    votes: 56,
    comments: [],
    timestamp: Date.now(),
  },
];

const Explore = ({ theme, toggleTheme }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("explorePosts");
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
    localStorage.setItem("explorePosts", JSON.stringify(posts));
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
                  Explore posts
                </h2>
                <p className="text-sm text-secondary">
                  Discover new communities and content
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

export default Explore;
