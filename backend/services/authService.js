import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwtHelper.js';

const mockUser = {
  id: 1,
  email: 'test@example.com',
  password: 'password123',
  name: 'Test User'
};

let validRefreshTokens = new Set();

export const authService = {
  login: (email, password) => {
    if (email !== mockUser.email || password !== mockUser.password) {
      throw new Error('Invalid credentials');
    }

    const user = { id: mockUser.id, email: mockUser.email };
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    
    validRefreshTokens.add(refreshToken);

    return { accessToken, refreshToken, user: { id: user.id, email: user.email, name: mockUser.name } };
  },

  refresh: (token) => {
    if (!validRefreshTokens.has(token)) {
      throw new Error('Invalid refresh token');
    }

    const userPayload = verifyRefreshToken(token);
    const user = { id: userPayload.id, email: mockUser.email };
    const accessToken = generateAccessToken(user);
    
    return { accessToken };
  },

  logout: (token) => {
    validRefreshTokens.delete(token);
    return { message: 'Logged out successfully' };
  }
};
