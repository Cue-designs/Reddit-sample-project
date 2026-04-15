import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Help = ({ theme, toggleTheme }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I create a post?",
      answer:
        "Open the Create Post flow on the home feed, add a title and content, then submit. Your post appears immediately in the feed.",
    },
    {
      question: "Can I add media to a post?",
      answer:
        "Yes. Use the media upload option when creating a post to attach images or media links, making your post more engaging.",
    },
    {
      question: "How do votes work?",
      answer:
        "Click the upvote or downvote buttons on a post to adjust its score. Votes help promote popular content and demote low-quality posts.",
    },
    {
      question: "How do I reply to comments?",
      answer:
        "Open a post thread, find the comment you want to reply to, and use the reply input. Submit your response and it will appear under the comment.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border border-surface bg-surface p-8 shadow-surface">
          <h1 className="text-3xl font-semibold text-[var(--text-h)]">Help</h1>
          <p className="mt-4 leading-7 text-secondary">
            Need help using the Reddit clone? This page contains resources for
            community support, FAQ topics, and troubleshooting.
          </p>

          <section className="mt-8 space-y-6">
            <div className="rounded-3xl border border-surface-alt bg-[var(--bg)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                Community Support
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                Visit the About page for app and community guidelines, and use
                this Help page for how-to guidance, answers, and
                troubleshooting.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-secondary">
                <li>Find answers to common questions in the FAQ section.</li>
                <li>
                  Use troubleshooting tips if the app does not behave as
                  expected.
                </li>
                <li>
                  Explore the home feed to practice creating posts and replying.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-surface-alt bg-[var(--bg)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                FAQ
              </h2>
              <div className="mt-4 space-y-3 text-sm text-secondary">
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={item.question}
                      className="overflow-hidden rounded-3xl border border-surface bg-surface-alt"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-primary transition hover:bg-surface-strong"
                      >
                        <span>{item.question}</span>
                        <span className="text-lg">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-surface p-5 text-sm leading-7 text-secondary">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-surface-alt bg-[var(--bg)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                Troubleshooting
              </h2>
              <div className="mt-4 space-y-4 text-sm text-secondary">
                <div>
                  <p className="font-semibold text-primary">
                    Page not loading?
                  </p>
                  <p className="leading-6">
                    Refresh the browser or clear localStorage if stale data is
                    preventing updated content from appearing.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    Cannot submit a post?
                  </p>
                  <p className="leading-6">
                    Ensure the title and content are filled in. If media upload
                    fails, try a different file type or retry the upload.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    Replies not showing?
                  </p>
                  <p className="leading-6">
                    Confirm your reply was submitted successfully, then refresh
                    the thread. Replies are stored locally and should appear in
                    the comment section.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-surface-alt bg-[var(--bg)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--text-h)]">
                How to Use the App
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-secondary">
                <p>
                  Create posts by entering a title and body, then submit them to
                  the feed. Add media uploads to make posts more visual.
                </p>
                <p>
                  Vote on posts using the upvote/downvote buttons to support or
                  demote content. Top-ranked posts are easier to find.
                </p>
                <p>
                  Reply to comments inside a post thread to participate in the
                  discussion. Replies are shown under the comment.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/about"
              className="inline-flex justify-center rounded-full bg-[#0079d3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
            >
              About Reddit
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

export default Help;
