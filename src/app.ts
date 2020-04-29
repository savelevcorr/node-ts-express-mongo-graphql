import http, { IncomingMessage, ServerResponse } from 'http';

function rqListener(req: IncomingMessage, res: ServerResponse): void {
    const {url} = req;

    if (url === '/') {
        res.setHeader('Contnet-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>
            <form action="/message" method="POST">
                <input type="text" autocomplete="none" name="message" />
                <button type="submit">Send message</button>
            </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }
    
    res.setHeader('Contnet-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);
server.listen(3001);