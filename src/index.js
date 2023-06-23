import path from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'node:readline';
import { handleUserName } from './handleUserName.js';
import { handleUp } from './nwd/up.js';
// import { Transform } from 'stream';
// import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { stdin, stdout } = process;

function logDir() {
  console.log(`You are currently in ${__dirname}`);
}


console.log(`Welcome to the File Manager, ${handleUserName()}!`);
logDir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputData;

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  inputData = input.toString().trim();

  switch (inputData.slice(0,2)) {
    case 'up':
      handleUp();
      break;
    case 'cd':
      handleCd(inputData);
      break;
    default:
      console.log( "Нет таких значений" );
  }
});




// stdin.on("data", data => {
//   if ( data.toString().trim() === '.exit' ) {
//     console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
//     process.exit()
//   }
// });

// const transform = new Transform({
//   transform(data, encoding, callback) {
//     callback(null, `Hello ${data.toString()}`);
//   },
// });

// console.log(process.argv);
// pipeline(stdin, transform, stdout);

// process.on('exit', () => console.log(`Thank you for using File Manager, Username, goodbye!`));
process.on('SIGINT', (data) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});