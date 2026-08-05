const fs = require('fs');
const path = require('path');
require('./verify-static');
const out = path.join(process.cwd(), 'public');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'styles.css']) {
  fs.copyFileSync(path.join(process.cwd(), file), path.join(out, file));
}
console.log('Built static site into public/');
