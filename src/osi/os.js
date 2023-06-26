import { cwd } from 'node:process';
import { printArchitecture } from './os-architecture.js';
import { printCpus } from './os-cpus.js';
import { printEol } from './os-eol.js';
import { printHomedir } from './os-homedir.js';
import { printUsername } from './os-username.js';

export function handleOs(inputData) {
  try {
    const infoForHandle = inputData.slice(2).trim();

    switch (infoForHandle) {
      case '--EOL':
        printEol();
        break;
      case '--cpus':
        printCpus();
        break;
      case '--homedir':
        printHomedir();
        break;
      case '--username':
        printUsername();
        break;
      case '--architecture':
        printArchitecture();
        break;
      default:
        console.log('\x1b[36m%s\x1b[0m', `There is no value entered. Possible options for os:
          os --EOL
          os --cpus
          os --homedir
          os --username
          os --architecture`);
    }

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`os: ${err}`);
  }
}