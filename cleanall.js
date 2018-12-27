const fs = require('fs-extra');

fs.remove('dist');
console.log("dist deleted...");

fs.remove('node_modules');
console.log("node modules are cleaned...");
