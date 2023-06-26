import os from 'os';

export function printUsername() {
  try {
    console.log(`System user name: ${os.userInfo().username}`);
  } catch (err) {
    console.error(`username: ${err}`);
  }
}