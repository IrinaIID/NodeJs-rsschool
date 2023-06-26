import { chdir, cwd } from 'node:process';


function handleUp() {
  try {
    chdir('..');
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}

export { handleUp }