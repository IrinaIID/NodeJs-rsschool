"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
console.log(process.env.PORT); // remove this after you've confirmed it is working
console.log('Hello world!');
const config_js_1 = __importDefault(require("./config.js"));
console.log(config_js_1.default.port);
// const PORT = parseInt(process.env.PORT);
// import { createServer, IncomingMessage, ServerResponse } from 'http';
// const port = 5000;
// const server = createServer((request: IncomingMessage, response: ServerResponse) => {
//   response.end('Hello world!');
// });
// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
// server.on('error', err => console.error("Error Server", err));
