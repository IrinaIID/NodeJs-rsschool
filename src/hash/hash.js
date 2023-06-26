import { cwd } from 'node:process';
import path from 'path';
import fs from 'fs';
import { createHash } from 'node:crypto';


export async function handleHash(inputData) {
  try {
    const pathData = inputData.slice(4).trim();
    fs.readFile(path.resolve(cwd(), pathData), 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(createHash('sha256').update(data).digest('hex'));
      }
      console.log(`You are currently in ${cwd()}`);
    });
  } catch (err) {
    console.error(`handleHash: ${err}`);
  }
}
