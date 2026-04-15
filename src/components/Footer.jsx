import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-surface bg-surface px-6 py-8 text-sm text-secondary">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--text-h)]">
            Reddit Clone
          </h2>
          <p className="max-w-xl leading-6">
            A Reddit-style community feed with posts, comments, voting, search,
            media support, and light/dark mode.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold text-[var(--text-h)]">Pages</p>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link to="/" className="hover:text-[var(--text-h)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/popular" className="hover:text-[var(--text-h)]">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[var(--text-h)]">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-[var(--text-h)]">Resources</p>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link to="/about" className="hover:text-[var(--text-h)]">
                  About Reddit
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-[var(--text-h)]">
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  to="/developer-platform"
                  className="hover:text-[var(--text-h)]"
                >
                  Developer Platform
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-[var(--text-h)]">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-[var(--text-h)]">More</p>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link to="/explore" className="hover:text-[var(--text-h)]">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[var(--text-h)]">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-[var(--text-h)]">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-surface pt-6 text-center text-xs text-secondary">
        All rights reserved © Cajetan Emmanuel Ifat / 26 / SOE / 0224
      </div>
    </footer>
  );
};

export default Footer;
