import { AuthStorageService } from './authStorage.service';

describe('Test LocalStorage', () => {
  const auth = new AuthStorageService();
  const token = 'abc';
  const setTokenMock = jest.spyOn(AuthStorageService.prototype, 'setToken');
  const getTokenMock = jest.spyOn(AuthStorageService.prototype, 'getToken');
  const removeTokenMock = jest.spyOn(AuthStorageService.prototype, 'removeToken');
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('Call localStorage setToken', () => {
    auth.setToken(token);
    expect(setTokenMock.mock.calls).toHaveLength(1);
    expect(setTokenMock.mock.calls[0][0]).toBe('abc');
  });
  it('Call localStorage getToken', () => {
    auth.setToken(token);
    auth.getToken();
    expect(getTokenMock.mock.calls).toHaveLength(1);
    expect(getTokenMock.mock.results[0].value).toBe('abc');
  });
  it('Call localStorage removeToken', () => {
    auth.setToken(token);
    auth.removeToken();
    expect(removeTokenMock.mock.calls).toHaveLength(1);
    expect(removeTokenMock.mock.results[0].value).toBeUndefined();
  });
});
