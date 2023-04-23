import { AuthStorageService } from './authStorage.service';

describe('Test LocalStorage', () => {
  const auth = new AuthStorageService();
  const token = 'abc';
  beforeEach(() => {
    localStorage.clear();
  });
  it('Call localStorage setToken', () => {
    const setTokenMock = jest.spyOn(Storage.prototype, 'setItem');
    auth.setToken(token);
    expect(setTokenMock).toBeCalled();
    expect(setTokenMock).toBeCalledWith('token', 'abc');
  });
  it('Call localStorage getToken', () => {
    const getTokenMock = jest.spyOn(Storage.prototype, 'getItem');
    auth.getToken();
    expect(getTokenMock).toBeCalled();
    expect(getTokenMock).toBeCalledWith('token');
  });
  it('Call localStorage removeToken', () => {
    const removeTokenMock = jest.spyOn(Storage.prototype, 'removeItem');
    auth.removeToken();
    expect(removeTokenMock).toBeCalled();
    expect(removeTokenMock).toBeCalledWith('token');
  });
});
