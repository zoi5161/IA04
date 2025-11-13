import { authService } from '../services/authService.js';

export const authController = {
  login: (req, res) => {
    try {
      const { email, password } = req.body;
      const data = authService.login(email, password);
      res.json(data);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },

  refresh: (req, res) => {
    try {
      const { token } = req.body;
      if (!token) {
        return res.status(401).json({ message: 'Refresh token required' });
      }
      const data = authService.refresh(token);
      res.json(data);
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
  },

  logout: (req, res) => {
    try {
      const { token } = req.body;
      authService.logout(token);
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      res.status(500).json({ message: 'Logout failed' });
    }
  }
};