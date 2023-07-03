import "dotenv/config";
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { usersBase } from "./modules/infoBase";
import { validate as isValidUUID } from 'uuid';


const port = process.env.PORT;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

  const url = request.url;
  const arrUrl = url?.split('/');

  switch (request.method) {
    case 'GET':
      if (arrUrl?.length == 2 && arrUrl[1] === 'users') {
        response.statusCode = 200;
        response.end(JSON.stringify(usersBase.getUsers()));
      } else if (arrUrl?.length == 3 && !isValidUUID(arrUrl[2])) {
        response.statusCode = 400;
        response.end('userId in URL is invalid (not uuid)');
      } else if (arrUrl?.length == 3 && usersBase.getCertainUser(arrUrl[2]).length === 0) {
        response.statusCode = 404;
        response.end("userId doesn't exist");
      } else if (arrUrl?.length == 3 && usersBase.getCertainUser(arrUrl[2])) {
        response.statusCode = 200;
        response.end(JSON.stringify(usersBase.getCertainUser(arrUrl[2])));
      } else {
        response.statusCode = 404;
        response.end();
      }
      break;

    default:
      response.statusCode = 404;
      response.end();
      break;
  }



  // switch (request.url) {
  //   case '/users': {
  //     if (request.method === 'GET') {
  //       response.end(JSON.stringify(usersBase.getUsers()));
  //       // response.statusCode = 200;
  //     }
  //     break;
  //   }
  //   case '/users': {
  //     if (request.method === 'GET') {
  //       response.end(JSON.stringify(usersBase.getUsers()));
  //     }
  //     break;
  //   }
  //   default: {
  //     response.statusCode = 404;
  //     response.end();
  //   }
  // }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', err => console.error("Error Server", err));