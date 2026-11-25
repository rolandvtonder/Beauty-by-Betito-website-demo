// Renders the page to static HTML after `vite build`, so search engines and
// link previews get the full content without running JavaScript.
import {readFile, rm, writeFile} from 'node:fs/promises';
import {fileURLToPath, pathToFileURL} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const htmlPath = path.join(root, 'dist', 'index.html');

const {render} = await import(pathToFileURL(ssrEntry).href);
const html = await readFile(htmlPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('prerender: #root placeholder not found in dist/index.html');

await writeFile(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
await rm(path.join(root, 'dist-ssr'), {recursive: true, force: true});
console.log('prerender: wrote dist/index.html');
