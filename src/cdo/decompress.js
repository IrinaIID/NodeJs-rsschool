import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';
import zlib from 'zlib';


export function handleDecompress(inputData) {
  try {
    const arrData = inputData.toString().split(' ');
    const pathData = path.resolve(cwd(), arrData[1]);
    const pathDest = path.resolve(cwd(), arrData[2]);

    if (arrData[1].split('.').at(-1) !== 'br') {
      console.log('The extension of the decompressed file must be "br"');
      return
    }

    const readStream = fs.createReadStream(pathData);
    readStream.on('error', err => {
      console.log('error with path_to_file', err.message);
      return
    });

    const writeStream = fs.createWriteStream(pathDest);
    writeStream.on('error', err => {
      console.log('error with path_to_destination', err.message);
      return
    });

    const brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);

    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`decompress: ${err}`);
  }
}