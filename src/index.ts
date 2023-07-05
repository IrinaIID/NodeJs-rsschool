import "dotenv/config";
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { usersBase } from "./modules/infoBase";
import { validate as isValidUUID } from 'uuid';
// import { IUser, IUserPOST } from "./interfaces/interfaces";


const port = process.env.PORT;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

  const url = request.url;
  const arrUrl = url?.split('/');

  switch (request.method) {
    case 'GET':
      if (arrUrl?.length == 2 && arrUrl[1] === 'users') {
        response.statusCode = 200;
        response.end(JSON.stringify(usersBase.getUsers()));
      } else if (arrUrl?.length == 3 && arrUrl[1] === 'users' && !isValidUUID(arrUrl[2])) {
        response.statusCode = 400;
        response.end('userId in URL is invalid (not uuid)');
      } else if (arrUrl?.length == 3 && arrUrl[1] === 'users' && usersBase.getCertainUser(arrUrl[2]).length === 0) {
        response.statusCode = 404;
        response.end("userId doesn't exist");
      } else if (arrUrl?.length == 3 && arrUrl[1] === 'users' && usersBase.getCertainUser(arrUrl[2])) {
        response.statusCode = 200;
        response.end(JSON.stringify(usersBase.getCertainUser(arrUrl[2])));
      } else {
        response.statusCode = 404;
        response.end('non-existing endpoints for GET request');
      }
      break;

    case 'POST':
      if(arrUrl?.length == 2 && arrUrl[1] === 'users') {
        request.on('data', function(data) {
            usersBase.addUser(data);

        })
        request.on('end', function() {
          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end('post received')
        })

      } else {
        response.statusCode = 404;
        response.end('non-existing endpoints for POST request');
      }
      break;

    default:
      response.statusCode = 404;
      response.end();
      break;
  }

});


// function isCorrectDataPOST(data: IUserPOST) {
//   if (typeof data.username === 'string' && typeof data.age === 'number' && Array.isArray(data.hobbies)) {
//     return true
//   } else {
//     return false;
//   }
// }


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', err => console.error("Error Server", err));