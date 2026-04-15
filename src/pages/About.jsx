import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const About = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-surface">
          <h1 className="text-3xl font-semibold text-[var(--text-h)]">
            About Reddit
          </h1>
          <p className="mt-4 leading-7 text-secondary">
            Reddit is a community-driven platform where people share content,
            join discussions, and build communities around interests.
            Contributions are organized into subreddits, and voting helps the
            best content surface to the top.
          </p>

          <section className="mt-8 space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                What this app is
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                This app is a demo version of a Reddit-style community
                experience. It shows how feeds, posting, voting, comments, and
                media sharing work in a modern React interface.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                Community guidelines
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-secondary">
                <li>
                  Be respectful: treat other community members with kindness.
                </li>
                <li>
                  Stay on topic: post content that matches the community theme.
                </li>
                <li>
                  No spam: avoid promotions, repetitive posts, or unrelated
                  links.
                </li>
                <li>
                  Follow the rules: respect the app rules and moderate content
                  fairly.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                Community rules
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-secondary">
                <p>
                  Use voting to support helpful posts and comments. Upvotes and
                  downvotes shape what appears in the feed.
                </p>
                <p>
                  Comment thoughtfully and avoid abusive or inflammatory
                  replies. Conversations should stay constructive.
                </p>
                <p>
                  If a post or comment violates the rules, use moderation tools
                  or report it through the app flow when available.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/help"
              className="inline-flex justify-center rounded-full bg-[#0079d3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
            >
              Visit Help Center
            </Link>
            <Link
              to="/"
              className="inline-flex justify-center rounded-full border border-surface-alt bg-transparent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-surface-strong"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
