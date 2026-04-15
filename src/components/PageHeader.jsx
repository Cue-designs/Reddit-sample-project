import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const PageHeader = ({
  searchQuery,
  setSearchQuery,
  theme,
  toggleTheme,
  showSearch = true,
}) => {
  return (
    <header className="sticky top-0 z-30 border-b border-surface bg-surface-strong px-4 py-3 shadow-sm shadow-black/10">
      <div className="mx-auto flex max-w-[1500px] items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl bg-surface-alt px-3 py-2">
          <div className="h-9 w-9 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold text-white">
            R
          </div>
          <div className="text-lg font-semibold text-[var(--text-h)]">
            reddit
          </div>
        </div>

        {showSearch ? (
          <div className="flex-1">
            <input
              type="text"
              placeholder="Find anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-surface bg-surface-alt px-4 py-2 text-sm text-[var(--text)] placeholder:text-secondary focus:border-[#0079d3] focus:outline-none"
            />
          </div>
        ) : (
          <div className="flex-1" />
        )}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface bg-surface text-[var(--text)] transition hover:bg-surface-alt"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="h-5 w-5" />
            )}
          </button>
          {showSearch && (
            <Link
              to="/login"
              className="rounded-full border border-surface bg-surface px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
