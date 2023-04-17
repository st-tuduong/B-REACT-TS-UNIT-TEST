import { AuthStorageService } from './authStorage.service';
import { AuthStorageService2 } from './authStorage.service2';

describe('Test AuthStorageSevice', () => {
  const auth = new AuthStorageService2();
  const token = 'abc';
  beforeEach(() => {
    localStorage.clear();
  });
  it('Call localStorage setToken', () => {
    const setTokenMock = jest.spyOn(AuthStorageService.prototype, 'setToken');
    auth.setToken(token);
    expect(setTokenMock).toBeCalled();
    expect(setTokenMock).toBeCalledWith();
  });
  it('Call localStorage getToken', () => {
    const getTokenMock = jest.spyOn(AuthStorageService.prototype, 'getToken');
    auth.getToken();
    expect(getTokenMock).toBeCalled();
    expect(getTokenMock).toBeCalledWith();
  });
  it('Call localStorage removeToken', () => {
    const removeTokenMock = jest.spyOn(AuthStorageService.prototype, 'removeToken');
    auth.removeToken();
    expect(removeTokenMock).toBeCalled();
    expect(removeTokenMock).toBeCalledWith();
  });
});
