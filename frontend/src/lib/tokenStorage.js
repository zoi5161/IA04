export const tokenStorage = {
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setRefreshToken: (token) => localStorage.setItem('refreshToken', token),
  clearTokens: () => localStorage.removeItem('refreshToken'),
};