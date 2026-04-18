import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const PageHeader = ({
  searchQuery,
  setSearchQuery,
  theme,
  toggleTheme,
  showSearch = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-30 border-b border-surface bg-surface-strong px-4 py-3 shadow-sm shadow-black/10">
      <div className="mx-auto flex max-w-[1500px] items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface bg-surface text-[var(--text)] transition hover:bg-surface-alt"
          title="Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>

        <div className="flex items-center gap-2 rounded-2xl bg-surface-alt px-3 py-2">
          <div className="h-9 w-9 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold text-white">
            R
          </div>
          <div className="text-lg font-semibold text-[var(--text-h)]">
            reddit
          </div>
        </div>

        {showSearch ? (
          <div className="flex-1 min-w-0">
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
              className="hidden rounded-full border border-surface bg-surface px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt sm:inline-flex"
            >
              Log In
            </Link>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block border-t border-surface bg-surface-strong">
        <div className="mx-auto max-w-[1500px] px-4">
          <nav className="flex items-center gap-6 py-2">
            <Link
              to="/"
              className="text-sm font-semibold text-[var(--text-h)] transition hover:text-[#0079d3]"
            >
              Home
            </Link>
            <Link
              to="/popular"
              className="text-sm font-semibold text-[var(--text)] transition hover:text-[#0079d3]"
            >
              Popular
            </Link>
            <Link
              to="/news"
              className="text-sm font-semibold text-[var(--text)] transition hover:text-[#0079d3]"
            >
              News
            </Link>
            <Link
              to="/explore"
              className="text-sm font-semibold text-[var(--text)] transition hover:text-[#0079d3]"
            >
              Explore
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-surface bg-surface-strong">
          <div className="mx-auto max-w-[1500px] px-4 py-4">
            <nav className="space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="block rounded-2xl bg-surface-alt px-4 py-3 text-sm font-semibold text-[var(--text-h)] transition hover:bg-surface"
              >
                Home
              </Link>
              <Link
                to="/popular"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
              >
                Popular
              </Link>
              <Link
                to="/news"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
              >
                News
              </Link>
              <Link
                to="/explore"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
              >
                Explore
              </Link>
              <div className="border-t border-surface pt-2 mt-4">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
                >
                  About Reddit
                </Link>
                <Link
                  to="/advertise"
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
                >
                  Advertise
                </Link>
                <Link
                  to="/developer-platform"
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
                >
                  Developer Platform
                </Link>
                <Link
                  to="/help"
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-surface-alt"
                >
                  Help
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default PageHeader;
