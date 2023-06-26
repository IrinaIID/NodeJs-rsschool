import os from 'os';

export function printArchitecture() {
  try {
    console.log(`CPU architecture: ${os.arch()}`);
  } catch (err) {
    console.error(`arch: ${err}`);
  }
}