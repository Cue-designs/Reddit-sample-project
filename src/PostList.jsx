import React from "react";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const PostList = ({ posts, onUpdatePost, onDeletePost, onAddPost }) => {
  return (
    <div className="space-y-4">
      <PostForm onAddPost={onAddPost} />
      {posts.length === 0 ? (
        <div className="rounded-3xl border border-surface bg-surface p-6 text-center text-sm text-secondary">
          No posts yet. Create one above to start the feed.
        </div>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onUpdatePost={(updater) => onUpdatePost(post.id, updater)}
            onDeletePost={() => onDeletePost(post.id)}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
