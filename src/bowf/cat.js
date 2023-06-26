import fs from 'fs';
import { cwd, stdout } from 'node:process';
import path from 'path';


async function handleCat(inputData) {
  try {
    const pathData = inputData.slice(3).trim();
    const readebleStream = fs.createReadStream(path.resolve(cwd().toString(), pathData));
    readebleStream.on('data', chunk => {
      stdout.write(chunk);
      console.log(`\nYou are currently in ${cwd()}`);
    });
    readebleStream.on('error', err => {
      console.log('error with path_to_file', err.message);
      return
    });
  } catch (err) {
    console.error(`cat: ${err}`);
  }
}

export { handleCat }
