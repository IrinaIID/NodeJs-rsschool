import { IUser } from "../interfaces/interfaces";
import { usersInitial } from "./initialBase";

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
}

export const usersBase = new Base()