import http from "http";
import fs from 'fs';

const homePage = fs.readFileSync('./views/index.html');
const pageNotFound = fs.readFileSync('./views/404.html');
const programmerGif = fs.readFileSync('./public/programmer.gif');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
  } else if (req.url === '/public/programmer.gif') {
    res.writeHead(200, { "Content-Type": "image/gif" });
    res.write(programmerGif);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(pageNotFound);    
  }
  res.end();
});

server.listen(8001);