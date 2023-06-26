import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';

export function handleRn(inputData) {
  try {
    const data = inputData.toString().slice(3).trim();
    const arrData = data.split(' ');
    const pathData = path.resolve(cwd().toString(), arrData[0]);

    const pathDestArr = pathData.split('\\')
    const pathDest = pathDestArr.splice(pathDestArr[pathDestArr.length - 1], 1, arrData[1] ).join('\\');
    console.log(arrData[0]);
    console.log(arrData[1]);
    console.log(pathData)
    console.log(pathDest);

    fs.rename(
      pathData,
      pathDest,
      err => {
        if(err) console.log(err);
      }
    );
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error(`rn: ${err}`);
  }
}
