import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';

export function handleCp(inputData) {
  try {
    const arrData = inputData.toString().split(' ');
    const pathData = path.resolve(cwd(), arrData[1]);
    const pathDest = path.resolve(cwd(), arrData[2]);


    const readebleStream = fs.createReadStream(pathData, 'utf-8');
    const writebleStream = fs.createWriteStream(pathDest);

    readebleStream.on('data', chunk => writebleStream.write(chunk));

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`cp: ${err}`);
  }
}