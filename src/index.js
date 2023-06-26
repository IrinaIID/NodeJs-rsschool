import * as readline from 'node:readline';
import { handleUserName } from './handleUserName.js';
import { handleUp } from './nwd/up.js';
import { handleCd } from './nwd/cd.js';
import { handleLs } from './nwd/ls.js';
import { handleCat } from './bowf/cat.js';
import { handleAdd } from './bowf/add.js';
import { handleRn } from './bowf/rn.js';
import { handleCp } from './bowf/cp.js';
import { handleMv } from './bowf/mv.js';
import { handleRm } from './bowf/rm.js';
import { handleOs } from './osi/os.js';
import { handleHash } from './hash/hash.js';
import { handleAllValues } from './handleAllValues.js';
import { handleCompress } from './cdo/compress.js';
import { handleDecompress } from './cdo/decompress.js';


function logDir() {
  console.log(`You are currently in ${process.cwd()}`);
}

console.log('\x1b[36m%s\x1b[0m', `Welcome to the File Manager, ${handleUserName()}!`);
logDir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputData;

rl.on('line', (input) => {
  console.log(`Received: ${input}`); //need to remove after ending work

  if ( input === '.exit' ) {
    console.log('\x1b[36m%s\x1b[0m', `Thank you for using File Manager, ${handleUserName()}, goodbye!`);
    process.exit();
  }

  inputData = input.toString().trim();

  switch (inputData.slice(0,3).trim()) {
    case 'up':
      handleUp();
      break;
    case 'cd':
      handleCd(inputData);
      break;
    case 'ls':
      handleLs();
      break;
    case 'cat':
      handleCat(inputData);
      break;
    case 'add':
      handleAdd(inputData);
      break;
    case 'rn':
      handleRn(inputData);
      break;
    case 'cp':
      handleCp(inputData);
      break;
    case 'mv':
      handleMv(inputData);
      break;
    case 'rm':
      handleRm(inputData);
      break;
    case 'os':
      handleOs(inputData);
      break;
    case 'has':
      handleHash(inputData);
      break;
    case 'com':
      handleCompress(inputData);
      break;
    case 'dec':
      handleDecompress(inputData);
      break;
    default:
      handleAllValues();
      console.log(`You are currently in ${process.cwd()}`);
    }
});

rl.on('close', () => {
  console.log('\x1b[36m%s\x1b[0m', `Thank you for using File Manager, ${handleUserName()}, goodbye!`);
  process.exit();
});
