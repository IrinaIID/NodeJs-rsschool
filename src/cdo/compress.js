import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';
import zlib from 'zlib';


export function handleCompress(inputData) {
  try {
    const arrData = inputData.toString().split(' ');
    const pathData = path.resolve(cwd(), arrData[1]);
    const pathDest = path.resolve(cwd(), arrData[2]);

    const readStream = fs.createReadStream(pathData);
    readStream.on('error', err => {
      console.log('error with path_to_file', err.message);
      return
    });

    if (arrData[2].split('.').at(-1) !== 'br') {
      console.log('The extension of the compressed file must be "br"');
      return
    }

    const writeStream = fs.createWriteStream(pathDest);
    writeStream.on('error', err => {
      console.log('error with path_to_destination', err.message);
      return
    });

    const brotli = zlib.createBrotliCompress();
    readStream.pipe(brotli).pipe(writeStream);

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`compress: ${err}`);
  }
}