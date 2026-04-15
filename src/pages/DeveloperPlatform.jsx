import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const DeveloperPlatform = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-surface">
          <h1 className="text-3xl font-semibold text-[var(--text-h)]">
            Developer Platform
          </h1>
          <p className="mt-4 leading-7 text-secondary">
            This page explains the developer platform concept and how
            third-party developers can build integrations on top of the
            community experience.
          </p>
          <div className="mt-6 space-y-4 text-sm text-secondary">
            <p>
              A real developer platform would include API documentation, plugin
              guidelines, and tools to connect apps to the Reddit-style feed.
            </p>
            <p>
              Use this space to showcase SDKs, sample payloads, and integration
              workflow for the community application.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex rounded-full bg-[#0079d3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeveloperPlatform;
