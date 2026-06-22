const fs = require('fs');

const productsPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\products.tsx';
const productDataPath = 'c:\\Btech\\Freelance\\aztech-fe\\lib\\product-data.ts';
const productsDropdownPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\navigation\\products-dropdown.tsx';
const footerPath = 'c:\\Btech\\Freelance\\aztech-fe\\components\\sections\\footer.tsx';

let productsContent = fs.readFileSync(productsPath, 'utf8');

// Find the export const categories = [ ... ]
const startIdx = productsContent.indexOf('export const categories = [');
// The array ends right before the Suspense import, around line 330
const endMatch = productsContent.match(/\]\n*\s*import \{ Suspense \} from "react"/);
const endIdx = endMatch.index + 1; // pointing exactly to the end of the array ]

const categoriesStr = productsContent.substring(startIdx, endIdx);

// Write to product-data.ts
let productDataContent = fs.readFileSync(productDataPath, 'utf8');
productDataContent += '\n\n' + categoriesStr;
fs.writeFileSync(productDataPath, productDataContent);

// Remove from products.tsx and add import
productsContent = productsContent.slice(0, startIdx) + 'import { Suspense } from "react"' + productsContent.slice(endMatch.index + endMatch[0].length - 30);
// Wait, safer replacement:
productsContent = fs.readFileSync(productsPath, 'utf8');
productsContent = productsContent.replace(categoriesStr, '');
// Add import to products.tsx
productsContent = productsContent.replace('import { productDetails } from "@/lib/product-data"', 'import { productDetails, categories } from "@/lib/product-data"');
fs.writeFileSync(productsPath, productsContent);

// Update dropdown
let dropdownContent = fs.readFileSync(productsDropdownPath, 'utf8');
dropdownContent = dropdownContent.replace('import { categories } from "../sections/products"', 'import { categories } from "@/lib/product-data"');
fs.writeFileSync(productsDropdownPath, dropdownContent);

// Update footer
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace('import { categories } from "./products"', 'import { categories } from "@/lib/product-data"');
fs.writeFileSync(footerPath, footerContent);

console.log('Successfully moved categories to lib/product-data.ts');
