const fs = require('fs');

// 1. Update solutions.tsx
const solPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\solutions.tsx';
let solContent = fs.readFileSync(solPath, 'utf8');

solContent = solContent.replace(
  /import { useEffect, useRef, useState } from "react"/,
  'import { useEffect, useRef, useState } from "react"\nimport { useSearchParams } from "next/navigation"'
);

const oldHookLogic = `  const [activeTab, setActiveTab] = useState("retail")
  const { ref, isVisible } = useReveal()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#solutions-')) {
        const id = hash.replace('#solutions-', '');
        if (industries.some(i => i.id === id)) {
          setActiveTab(id);
          setTimeout(() => {
            const el = document.getElementById('solutions');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 10);
        }
      }
    };
    
    // Check initially in case loaded with hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);`;

const newHookLogic = `  const searchParams = useSearchParams()
  const initialTab = industries.some(i => i.id === searchParams.get("solution")) ? searchParams.get("solution") : "retail"
  const [activeTab, setActiveTab] = useState(initialTab)
  const { ref, isVisible } = useReveal()

  useEffect(() => {
    const solution = searchParams.get("solution")
    if (solution && industries.some(i => i.id === solution)) {
      setActiveTab(solution)
    }
  }, [searchParams])`;

solContent = solContent.replace(oldHookLogic, newHookLogic);
// Make sure Suspense is wrapping things if searchParams is used in Next.js?
// If not wrapped in Suspense, it throws a build warning/error in Next.js. So let's wrap it in an inner component.
// Wait, the page is already a client component, Next.js build complains if useSearchParams is used without Suspense in a layout/page.
// Let's refactor SolutionsSection to have an Inner component.
const newComponentStruct = `import { Suspense } from "react"

function SolutionsSectionInner() {
${newHookLogic}

  const activeIndustry = industries.find(i => i.id === activeTab)!
`;

solContent = solContent.replace(`export function SolutionsSection() {\n${newHookLogic}\n\n  const activeIndustry = industries.find(i => i.id === activeTab)!`, newComponentStruct);

solContent = solContent.replace('export function SolutionsSection() {\n  const [activeTab, setActiveTab]', 'function SolutionsSectionInner() {\n  const [activeTab, setActiveTab]');
// Actually I'll just use a safer string replace since the above might fail if the previous replace already happened.

fs.writeFileSync(solPath, solContent);

// 2. Update footer.tsx
const footerPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');

footerContent = footerContent.replace(
  /href: "\/#solutions-([^"]+)"/g,
  'href: "/?solution=$1#solutions"'
);

fs.writeFileSync(footerPath, footerContent);

// 3. Update solutions-dropdown.tsx
const dropdownPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\navigation\\solutions-dropdown.tsx';
let dropContent = fs.readFileSync(dropdownPath, 'utf8');

dropContent = dropContent.replace(
  /href=\{`\/\#solutions-\$\{industry\.id\}`\}/g,
  'href={`/?solution=${industry.id}#solutions`}'
);
dropContent = dropContent.replace(
  /<a\n/g,
  '<Link\n'
);
dropContent = dropContent.replace(
  /<\/a>/g,
  '</Link>'
);
if (!dropContent.includes('import Link')) {
  dropContent = dropContent.replace(
    'import { ArrowRight } from "lucide-react"',
    'import { ArrowRight } from "lucide-react"\nimport Link from "next/link"'
  );
}

fs.writeFileSync(dropdownPath, dropContent);

console.log('Done replacing references.');
