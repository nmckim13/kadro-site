const fs = require('fs');
const required = ['index.html', 'styles.css', 'DESIGN.md'];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`${file} is missing`);
}
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const banned = ['#6366f1', '#4f46e5', '#8b5cf6', 'lorem ipsum', 'feature one', 'AI transformation'];
for (const token of banned) {
  if ((html + css).toLowerCase().includes(token.toLowerCase())) {
    throw new Error(`Banned generic/AI-slop token found: ${token}`);
  }
}
for (const text of ['You run the business. Kadro handles the digital work.', 'Kadro On Call', 'No-Missed-Lead Setup']) {
  if (!html.includes(text)) throw new Error(`Required copy missing: ${text}`);
}
console.log('Static Kadro site verification passed.');
