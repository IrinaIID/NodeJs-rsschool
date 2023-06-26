import fs from 'fs/promises';
import { cwd } from 'process';


async function handleLs() {
  try {
    const dirs = [];
    const files = [];
    const contentDir = await fs.readdir(cwd(), {withFileTypes: true});

    contentDir.forEach(item => {
      if ( item.isDirectory() ) {
        dirs.push({Name: item.name, Type: 'directory'});
      } else {
        files.push({Name: item.name, Type: 'file'});
      }
    });

    console.table([...dirs.sort(), ...files.sort()]);
    console.log(`You are currently in ${cwd()}`);

  } catch (err) {
    console.error(`handleLs: ${err}`);
  }
}

export { handleLs }

