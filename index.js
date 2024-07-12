const http = require('node:http');

const {sdf } = require('./some_dir/helper');
sdf();

console.log('hello Okten!');
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n 22222');
});
server.listen(3000);

