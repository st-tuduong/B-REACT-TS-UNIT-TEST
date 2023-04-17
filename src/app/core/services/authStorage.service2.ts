import { AuthStorageService } from './authStorage.service';

export class AuthStorageService2 {
  authStorage: AuthStorageService;

  constructor() {
    this.authStorage = new AuthStorageService();
  }
  setToken(token?: any) {
    return this.authStorage.setToken();
  }

  getToken() {
    return this.authStorage.getToken();
  }

  removeToken() {
    return this.authStorage.removeToken();
  }
}
