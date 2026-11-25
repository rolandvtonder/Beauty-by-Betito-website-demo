import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App';
import './index.css';

// The scroll effects depend on position; always start at the top.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships pre-rendered HTML (for search engines and a fast
// first paint); hydrate it. In dev the root is empty, so render from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
