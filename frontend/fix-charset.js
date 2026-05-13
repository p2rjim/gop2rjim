const fs=require('fs'); 
let c=fs.readFileSync('frontend/app/globals.css', 'utf8');
c = c.replace(/\/\*[\s\S]*?\*\//g, ''); // all comments
c = c.replace(/\uFFFD/g, ''); // remove replacement chars
fs.writeFileSync('frontend/app/globals.css', c, 'utf8');
console.log('Fixed');