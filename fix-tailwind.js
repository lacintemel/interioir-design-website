const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix custom colors e.g. text-[var(--color-cream)] -> text-cream
  content = content.replace(/([a-z]+)-\[var\(--color-([a-z-]+)\)\]/g, '$1-$2');
  
  // Fix custom spacing e.g. h-[1px] -> h-px, h-[2px] -> h-0.5
  content = content.replace(/h-\[1px\]/g, 'h-px');
  content = content.replace(/w-\[1px\]/g, 'w-px');
  content = content.replace(/h-\[2px\]/g, 'h-0.5');
  content = content.replace(/w-\[2px\]/g, 'w-0.5');
  
  // Fix fonts e.g. font-[var(--font-serif)] -> font-(--font-serif)
  content = content.replace(/([a-z]+)-\[var\(--([a-z-]+)\)\]/g, '$1-(--$2)');
  
  // Fix aspect ratio e.g. aspect-[16/10] -> aspect-16/10, aspect-[4/3] -> aspect-4/3
  content = content.replace(/aspect-\[(\d+\/\d+)\]/g, 'aspect-$1');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('Done!');
