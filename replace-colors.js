const fs = require('fs');

const files = [
  'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\products.tsx',
  'c:\\Btech\\Freelance\\aztech-fe\\components\\ui\\product-modal.tsx'
];

const replacements = [
  { search: /bg-\[#050505\]/g, replace: 'bg-[var(--bg-secondary)]' },
  { search: /bg-\[#111111\]/g, replace: 'bg-white shadow-sm' },
  { search: /bg-\[#0A0A0A\]/g, replace: 'bg-white' },
  { search: /bg-\[#1A1A1A\]/g, replace: 'bg-[var(--bg-tertiary)]' },
  { search: /text-white\/20/g, replace: 'text-[var(--text-muted)] opacity-50' },
  { search: /text-white\/30/g, replace: 'text-[var(--text-muted)] opacity-70' },
  { search: /text-white\/40/g, replace: 'text-[var(--text-muted)]' },
  { search: /text-white\/50/g, replace: 'text-[var(--text-secondary)]' },
  { search: /text-white\/60/g, replace: 'text-[var(--text-secondary)]' },
  { search: /text-white\/70/g, replace: 'text-[var(--text-body)]' },
  { search: /text-white\/80/g, replace: 'text-[var(--text-body)]' },
  { search: /text-white\/90/g, replace: 'text-[var(--text-primary)]' },
  { search: /text-white(?![\/\w])/g, replace: 'text-[var(--text-primary)]' },
  { search: /border-white\/5/g, replace: 'border-[var(--border-light)]' },
  { search: /border-white\/10/g, replace: 'border-[var(--border-light)]' },
  { search: /border-white\/30/g, replace: 'border-[var(--border-medium)]' },
  { search: /hover:border-white\/30/g, replace: 'hover:border-[var(--border-medium)]' },
  { search: /hover:bg-white\/5/g, replace: 'hover:bg-[var(--bg-tertiary)]' },
  { search: /hover:bg-white\/10/g, replace: 'hover:bg-[var(--bg-tertiary)]' },
  { search: /hover:text-white\/50/g, replace: 'hover:text-[var(--text-secondary)]' },
  { search: /hover:text-white\/60/g, replace: 'hover:text-[var(--text-secondary)]' },
  { search: /hover:text-white\/80/g, replace: 'hover:text-[var(--text-body)]' },
  { search: /hover:text-white(?![\/\w])/g, replace: 'hover:text-[var(--text-primary)]' },
  { search: /from-\[#050505\]\/90/g, replace: 'from-[var(--bg-secondary)]/90' },
  { search: /via-\[#050505\]\/10/g, replace: 'via-[var(--bg-secondary)]/10' },
  { search: /bg-black\/80/g, replace: 'bg-black/40' },
  { search: /hover:bg-white\/\[0\.02\]/g, replace: 'hover:bg-[var(--bg-secondary)]' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
