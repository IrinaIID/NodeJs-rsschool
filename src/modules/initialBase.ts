import { IUser } from "../interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';

export const usersInitial: IUser[] = [
  {
    id: uuidv4(),
    username: 'Anna',
    age: 23,
    hobbies: []
  },
  {
    id: uuidv4(),
    username: 'Bred',
    age: 35,
    hobbies: ['fishing', 'basketball']
  },
  {
    id: uuidv4(),
    username: 'Tom',
    age: 17,
    hobbies: ['basketball']
  }
];