# Reddit Clone

A fully functional frontend-only user-generated content (UGC) web application similar to Reddit, built with React.js, Tailwind CSS, and localStorage for persistence.

## Features

- **Post System**: Create, view, edit, and delete posts with titles and content.
- **Comment System**: Hierarchical nested comments up to 5 levels deep, with edit and delete functionality.
- **Voting System**: Upvote and downvote posts and comments with optimistic UI updates.
- **Data Persistence**: All data stored in localStorage, automatically saved and loaded.
- **Responsive Design**: Clean, modern UI styled with Tailwind CSS.

## Tech Stack

- React 19 (functional components and hooks)
- TypeScript
- Tailwind CSS v4
- Vite
- localStorage for persistence

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
npm run build
```

## Project Structure

- `src/App.tsx`: Main application component
- `src/PostList.tsx`: Displays list of posts
- `src/PostItem.tsx`: Individual post component
- `src/PostForm.tsx`: Form for creating new posts
- `src/CommentSection.tsx`: Manages comments for a post
- `src/CommentItem.tsx`: Recursive component for nested comments
- `src/VoteButtons.tsx`: Voting buttons component
- `src/types.ts`: TypeScript interfaces
- `src/index.css`: Global styles with Tailwind import
  import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
