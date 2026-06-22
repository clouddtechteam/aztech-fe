const fs = require('fs');

const path = 'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\portfolio.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove filters array
const filtersStart = content.indexOf('const filters = [');
const filtersEnd = content.indexOf(']', filtersStart) + 1;
content = content.substring(0, filtersStart) + content.substring(filtersEnd);

// Remove activeFilter state and filteredProjects
content = content.replace(/const \[activeFilter, setActiveFilter\] = useState\("All"\)\n/, '');
content = content.replace(/const filteredProjects = activeFilter === "All" \n    \? projects \n    : projects\.filter\(p => p\.filter\.includes\(activeFilter\)\)\n/, '');

// Remove Filter tabs JSX
const tabsStart = content.indexOf('{/* Filter tabs */}');
const gridStart = content.indexOf('{/* Projects Grid */}');
content = content.substring(0, tabsStart) + content.substring(gridStart);

// Change filteredProjects to projects in map
content = content.replace('filteredProjects.map', 'projects.map');

fs.writeFileSync(path, content);
console.log('Filters removed successfully.');
