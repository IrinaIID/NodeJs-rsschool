import fs from 'fs';
import { cwd, stdout } from 'node:process';


async function handleCat(inputData) {
  try {
    const pathData = inputData.slice(3).trim();
    const readebleStream = fs.createReadStream(path.resolve(cwd().toString(), pathData.toString()), 'utf-8');
    readebleStream.on('data', chunk => {
      stdout.write(chunk);
      console.log(`\nYou are currently in ${cwd()}`);
    });
  } catch (err) {
    console.error(`cat: ${err}`);
  }
}

export { handleCat }
