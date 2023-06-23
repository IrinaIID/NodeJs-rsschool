import { chdir, cwd } from 'node:process';


function handleUp() {
  // console.log(`Starting directory: ${cwd()}`);
  try {
    chdir('..');
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}

export { handleUp }