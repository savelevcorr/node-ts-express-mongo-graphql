import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

/**
 * Simple routes handler
 * It allows users to send a message and store its content on the server in a simple text file.
 * @param req {any}
 * @param res {object}
 * @returns {void}
 */
function rqListener(req: IncomingMessage, res: ServerResponse): void {
  const { url, method } = req;
  let body: any[] = [];

  if (url === "/") {
    res.setHeader("Contnet-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`<body>
              <form action="/message" method="POST">
                  <input type="text" autocomplete="none" name="message" />
                  <button type="submit">Send message</button>
              </form>
          </body>`);
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    req.on("data", (data) => {
      body.push(data);
    });
    req.on("end", () => {
      const parsedBodu = Buffer.concat(body).toString();
      const message = parsedBodu.split("=")[0];
      
      fs.writeFile("message.txt", message, (error) => {
        if (!error) {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
  }

  res.setHeader("Contnet-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write("<body><h1>Hello from my Node.js server</h1></body>");
  res.write("</html>");
  res.end();
}

export default rqListener;
