import { IUser, IUserPOST } from '../interfaces/interfaces';
import { usersInitial } from './initialBase';
import { v4 as uuidv4 } from 'uuid';


class Base {
  users: IUser[];

  constructor() {
    this.users = usersInitial;
  }

  getUsers() {
    return this.users;
  }

  getCertainUser(idUser: string) {
    const userInfo = this.users.filter(user => user.id === idUser);
    return userInfo;
  }

  addUser(user: IUserPOST) {
    
    console.log(user.age)
    const newUser = {
      id: uuidv4(),
      username: user.username,
      age: user.age,
      hobbies: user.hobbies
    }
    this.users.push(newUser);
  }
}

export const usersBase = new Base()