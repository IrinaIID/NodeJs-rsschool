import os from 'os';

export function printEol() {
  try {
    console.log(JSON.stringify(os.EOL));
  } catch (err) {
    console.error(`eol: ${err}`);
  }
}