import os from 'os';

export function printHomedir() {
  try {
    console.log(`Home directory: ${os.homedir()}`);
  } catch (err) {
    console.error(`homedir: ${err}`);
  }
}