import fs from 'fs';
import { cwd } from 'node:process';

export function handleRm(inputData) {
  try {
    const pathData = inputData.slice(2).trim();

    fs.stat(pathData, (err) => {
      if (err) {
        console.log('unvalid path to file');
      } else {
        fs.unlink(pathData, err => {
          if(err) console.error(err);
        });
      }
    });

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`rm: ${err}`);
  }
}