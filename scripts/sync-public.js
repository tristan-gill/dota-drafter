// Copies the freshly built frontend (frontend/build) over the root
// `public/` folder that index.js serves. Run automatically by the
// `heroku-postbuild` script after `frontend` is built, so Heroku always
// deploys whatever is currently in frontend/src without a manual copy step.
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'frontend', 'build');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(buildDir)) {
  console.error(`Build output not found at ${buildDir}. Run "npm run build" first.`);
  process.exit(1);
}

fs.rmSync(publicDir, { recursive: true, force: true });
fs.cpSync(buildDir, publicDir, { recursive: true });

console.log(`Synced ${buildDir} -> ${publicDir}`);
