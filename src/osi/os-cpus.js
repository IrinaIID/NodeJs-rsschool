import os from 'os';

export function printCpus() {
  try {
    console.log(`Overall amount of CPUS: ${os.cpus().length}`);
    console.log(os.cpus());
  } catch (err) {
    console.error(`cpus: ${err}`);
  }
}