const http = require('http');
const url = require('url');
const port = 1337;
const host = '192.168.0.106';

// const server = http.createServer(function (req, res) {
//     console.log("Method and URL", req.method, req.url);
//     const parsedURL = url.parse(req.url);
//     console.log('parsedURL', parsedURL);
// });

const server = http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url, true);

    if (parsedURL.pathname == '/') {// if (parsedURL.pathname == '/echo' && parsedURL.query.message) { 
        if (parsedURL.query.message) {
            console.log("Method and URL", req.method, req.url);
            console.log('parsedURL', parsedURL);
            res.statusCode = 200;
            res.setHeader('Cache-control', 'no-cache');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: parsedURL.query.message }, null, 3));
        } else if (!parsedURL.query.message) {
            console.log("Method and URL", req.method, req.url);
            console.log('parsedURL', parsedURL);
            res.statusCode = 200;
            res.setHeader('Cache-control', 'no-cache');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: "No message was received from the client." }, null, 3));
        }
    } else {
        console.log("Method and URL", req.method, req.url);
        console.log('parsedURL', parsedURL);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: "Page not found" }, null, 3));
        // res.end("Page not found");
    }
});

server.listen(port, host, function () {
    console.log(`Web server is running on port ${port}`);
});