const fs = require('fs');

let content = fs.readFileSync('C:\\Btech\\Freelance\\aztech_redesign\\components\\sections\\products.tsx', 'utf8');

// Replace #E60000 with var(--accent)
content = content.replace(/#E60000/g, 'var(--accent)');

// Apply Suspense wrapper fix
content = content.replace('export function ProductsSection() {', 'import { Suspense } from "react"\n\nfunction ProductsSectionInner() {');
content = content + '\nexport function ProductsSection() {\n  return (\n    <Suspense fallback={<div className="min-h-[100svh] bg-white flex items-center justify-center">Loading products...</div>}>\n      <ProductsSectionInner />\n    </Suspense>\n  )\n}\n';

// Make export categories
content = content.replace('const categories =', 'export const categories =');

// Color replacements
const replacements = [
  { search: /bg-\[#050505\]/g, replace: 'bg-white' },
  { search: /bg-\[#111111\]/g, replace: 'bg-white shadow-sm' },
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
  { search: /hover:bg-white\/\[0\.02\]/g, replace: 'hover:bg-[var(--bg-secondary)]' },
  
  // Specific tweaks
  // Remove the gradient overlay completely
  { search: /<div className="absolute inset-0 bg-gradient-to-t from-\[#050505\]\/90 via-\[#050505\]\/10 to-transparent opacity-80" \/>/g, replace: '' },
  
  // Fix the active button styling so it doesn't get messed up by `text-white -> text-primary`
  // After `text-white` becomes `text-[var(--text-primary)]`, the active button gets:
  // `'bg-[var(--accent)] text-[var(--text-primary)] border-[var(--accent)] shadow-[0_0_15px_rgba(230,0,0,0.3)]'`
  // We need to fix this string specifically:
  { search: /'bg-\[var\(--accent\)\] text-\[var\(--text-primary\)\] border-\[var\(--accent\)\] shadow-\[0_0_15px_rgba\(230,0,0,0\.3\)\]'/g, replace: "'bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_0_15px_rgba(28,74,151,0.3)]'" }
];

replacements.forEach(r => {
  content = content.replace(r.search, r.replace);
});

fs.writeFileSync('c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\products.tsx', content);
console.log('Restored and fixed products.tsx safely.');
