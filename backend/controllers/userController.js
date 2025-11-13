export const userController = {
  getProfile: (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      name: 'Test User',
      bio: 'This is a protected profile.'
    });
  }
};