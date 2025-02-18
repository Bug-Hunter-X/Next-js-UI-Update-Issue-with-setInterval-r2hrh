# Next.js UI Update Issue with setInterval

This repository demonstrates a common issue in Next.js applications where changes made to component state using `setInterval` don't always trigger a UI update. The counter increments, but the display is stale, only updating upon an external event such as a route change or page refresh.

The `bug.js` file shows the problematic code. The `bugSolution.js` offers a solution using `useRef` for state management which solves this issue.