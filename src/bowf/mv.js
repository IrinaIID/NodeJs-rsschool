import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';

export function handleMv(inputData) {
  try {
    const data = inputData.toString().slice(2).trim();
    const arrData = data.split(' ');
    const pathData = path.resolve(cwd(), arrData[0]);
    const pathDest = path.resolve(cwd(), arrData[1]);

    fs.stat(pathData, (err) => {
      if (err) {
        console.error('error with path_to_file', err.message);
      } else {
        const readebleStream = fs.createReadStream(pathData, 'utf-8');
        readebleStream.on('error', err => {
          console.log('error with path_to_file', err.message);
          return
        });
        const writebleStream = fs.createWriteStream(pathDest);
        writebleStream.on('error', err => {
          console.log('error with path_to_destination', err.message);
          return
        });

        readebleStream.on('data', (chunk) => writebleStream.write(chunk));
        fs.unlink(pathData, err => {
          if(err) console.error(err);
        });
      }
    })


    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`mv: ${err}`);
  }
}