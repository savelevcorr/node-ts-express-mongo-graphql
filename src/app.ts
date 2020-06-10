import http, { IncomingMessage, ServerResponse } from "http";

import rqListener from "./routes";

const server = http.createServer(rqListener);
server.listen(3001);
