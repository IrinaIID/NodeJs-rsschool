import fs from 'fs';
import { cwd } from 'node:process';
import path from 'path';

export function handleRn(inputData) {
  try {
    const data = inputData.toString().slice(3).trim();
    const arrData = data.split(' ');
    const pathData = path.resolve(cwd().toString(), arrData[0]);

    const oldName = arrData[0].split('/').at(-1);
    const newName = arrData[1].split('/').at(-1);

    const pathDest = pathData.replace(oldName, newName)

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
