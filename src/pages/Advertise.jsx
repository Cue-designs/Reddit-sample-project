import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Advertise = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-surface">
          <h1 className="text-3xl font-semibold text-[var(--text-h)]">
            Advertise
          </h1>
          <p className="mt-4 leading-7 text-secondary">
            Reach your audience with tailored community posts and promoted
            content. This page serves as the placeholder for advertising details
            and opportunities inside the Reddit clone.
          </p>
          <div className="mt-6 space-y-4 text-sm text-secondary">
            <p>
              In a production Reddit-style app, advertising would include
              campaign creation, targeting options, and analytics for post
              performance.
            </p>
            <p>
              For now, this page is a simple informational destination linked
              from the app footer and navigation areas.
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

export default Advertise;
