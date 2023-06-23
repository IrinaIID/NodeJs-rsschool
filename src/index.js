import path from 'path';
import { fileURLToPath } from 'url';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { stdin, stdout } = process;

let userName;
const args = process.argv.slice(2);
args.forEach(arg => {
  if ( arg.includes('--username=') ) {
    console.log(arg)
    userName = arg.replace('--username=', '');
  } else {
    console.log('Please start app with correct typping user name, format  -- --username=your_username');
    process.exit();
  }
});

console.log(`Welcome to the File Manager, ${userName}!`)

console.log(args)

stdin.on('data', (data) => {
  if (data === '.exit') {process.exit()};
})

// const transform = new Transform({
//   transform(data, encoding, callback) {
//     callback(null, `Hello ${data.toString()}`);
//   },
// });

// console.log(process.argv);
// pipeline(stdin, transform, stdout);

// process.on('exit', () => console.log(`Thank you for using File Manager, Username, goodbye!`));
process.on('SIGINT', (data) => {
  console.log(`Thank you for using File Manager, Username, goodbye!`);
  process.exit();
});