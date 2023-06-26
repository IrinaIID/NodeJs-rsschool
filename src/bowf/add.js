import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';


function handleAdd(inputData) {
  try {
    const nameFile = inputData.slice(3).trim();
    fs.writeFile(path.resolve(path.resolve(cwd().toString(), nameFile)), '', (err) => {
      if (err) console.log(err);
    });
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`add: ${err}`);
  }
}

export { handleAdd }