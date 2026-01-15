const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const protectedDirs = [
  'backbone-cio-forum-austin-full-registration',
  'backbone-cio-forum-canada-full-registration',
  'backbone-cio-forum-las-vegas-full-registration',
  'backbone-cio-forum-miami-full-registration',
  'backbone-cto-cio-forums',
  'command-briefings',
  'contact',
  'event-template',
  'forums',
  'futurescale',
  'home',
  'it-event-providers',
  'itx-collective-prospectus',
  'kernel',
  'knowledge',
  'privacy-policy',
  'terms-of-use'
];

function cleanEventPages() {
  console.log('\nCleaning dynamically generated event pages...\n');

  let removedCount = 0;

  if (!fs.existsSync(appDir)) {
    console.log('No app directory found. Nothing to clean.');
    return;
  }

  const entries = fs.readdirSync(appDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (protectedDirs.includes(entry.name)) continue;
    if (entry.name.startsWith('.')) continue;

    const dirPath = path.join(appDir, entry.name);
    const pageFile = path.join(dirPath, 'page.tsx');
    const layoutFile = path.join(dirPath, 'layout.tsx');

    const hasPageFile = fs.existsSync(pageFile);
    const hasLayoutFile = fs.existsSync(layoutFile);

    if (hasPageFile || hasLayoutFile) {
      const files = fs.readdirSync(dirPath);
      const onlyHasTheseFiles = files.every(f =>
        f === 'page.tsx' || f === 'layout.tsx'
      );

      if (onlyHasTheseFiles && (files.length === 1 || files.length === 2)) {
        console.log(`  ✓ Removing /${entry.name}/`);
        fs.rmSync(dirPath, { recursive: true, force: true });
        removedCount++;
      }
    }
  }

  if (removedCount === 0) {
    console.log('  No generated event pages found to clean.\n');
  } else {
    console.log(`\n✅ Cleaned ${removedCount} generated event page(s).\n`);
  }
}

cleanEventPages();
