// testing Travis CI on a nodejs app
// the package.json defines the test behavior (which is to run JSLint; a javascript linter for code quality) 

const host = '127.0.0.1';
const port = 2333;

let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Diamond Delt\n');
}).listen(port, host);

console.log(`NodeJS server running at ${host}:${port}...`);