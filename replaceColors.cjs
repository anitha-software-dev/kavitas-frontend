const fs = require('fs');
const path = require('path');

const dir = 'src';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Backgrounds
  // All backgrounds to either the solid light blue or transparent/white for glass
  content = content.replace(/bg-\[\#F4FAFD\]/g, 'bg-[#6cb5d4]');
  content = content.replace(/bg-white/g, 'bg-[#6cb5d4]'); 
  content = content.replace(/bg-\[\#CFE0EB\]/g, 'bg-[#6cb5d4]'); 
  content = content.replace(/#CFE0EB/g, '#6cb5d4');
  
  // Accents and borders
  content = content.replace(/#3B5E74/g, '#000000');
  content = content.replace(/#69AECE/g, '#000000');
  content = content.replace(/border-black\/20/g, 'border-black/10');

  // Text
  content = content.replace(/text-\[\#131D2D\]/g, 'text-[#000000]');
  content = content.replace(/text-gray-900/g, 'text-[#000000]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(dir);
console.log('Color replacement script finished.');
