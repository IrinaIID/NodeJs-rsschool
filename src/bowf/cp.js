import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';

export function handleCp(inputData) {
  try {
    const data = inputData.toString().slice(2).trim();
    const arrData = data.split(' ');
    const pathData = path.resolve(cwd(), arrData[0]);
    const pathDest = path.resolve(cwd(), arrData[1]);

    // fs.cp(pathData, pathDest, { recursive: true }, (err) => {
    //   if (err) {
    //     console.error(err);
    //   }
    // });
    const readebleStream = fs.createReadStream(pathData, 'utf-8');
    const writebleStream = fs.createWriteStream(pathDest);

    readebleStream.on('data', chunk => writebleStream.write(chunk));

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`cp: ${err}`);
  }
}