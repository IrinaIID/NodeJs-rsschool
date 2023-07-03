import "dotenv/config";
import { v4 as uuidv4 } from 'uuid';
// import config from "./config.js";
// console.log(config.port);
import { createServer, IncomingMessage, ServerResponse } from 'http';


interface IUser {
  id: string
  username: string
  age: number
  hobbies: string[] | []
}

const users: IUser[] = [
  {
    id: uuidv4(),
    username: 'Anna',
    age: 23,
    hobbies: []
  }
];

const port = process.env.PORT;
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/users': {
      if (request.method === 'GET') {
        response.end(JSON.stringify(users));
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end();
    }
  }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', err => console.error("Error Server", err));