import {User} from "../../types/user/user";

class UserCache {
  public getStore = (): User => {
    return JSON.parse(window.localStorage.getItem("UserServiceStore"));
  };

  public getId = () => {
    let store: User;
    try {
      store = this.getStore();
    } catch (e) {
      this.clearStore();
    }
    return store.id;
  };

  public getEmail = () => {
    let store: User;
    try {
      store = this.getStore();
    } catch (e) {
      this.clearStore();
    }
    return store.email;
  };

  public setStore = (user: User) => {
    window.localStorage.setItem("UserServiceStore", JSON.stringify(user));
  };

  public clearStore = () => {
    this.setStore({} as User);
  };

  public checkStore = (): boolean => {
    try {
      const store = this.getStore();
      return store.id !== undefined || store.email !== undefined;
    } catch (e) {
      this.clearStore();
      return false;
    }
  };
}

export default new UserCache();
