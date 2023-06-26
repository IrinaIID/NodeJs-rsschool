import { chdir, cwd } from 'node:process';
import path from 'path';


function handleCd(inputData) {

  try {
    const pathData = inputData.slice(2).trim();
    chdir(path.resolve(cwd().toString(), pathData.toString()));
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }

}

export { handleCd }