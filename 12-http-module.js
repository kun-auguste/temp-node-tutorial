const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    else if(req.url === '/about'){
            res.end('A short history')
    }
    else{
    res.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
    }
});

const server2 = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.write('A short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
});

server2.listen(5000);

server.listen(3000);