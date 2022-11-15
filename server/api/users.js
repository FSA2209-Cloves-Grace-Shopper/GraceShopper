const router = require('express').Router();
const { models: { User } } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
module.exports = router;

// Get all users /api/users
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'lastName', 'address', 'email', 'role']
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// Get single user /api/users/:userId
router.get('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['firstName', 'lastName', 'address', 'email', 'role']
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// Update user /api/users/:userId
router.put('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      attributes: ['firstName', 'lastName', 'address', 'email', 'role'],
      where: {
        id: req.params.userId,
      },
      returning: true,
    });
    res.send(updateUser[1][0]);
  } catch (err) {
    next(err);
  }
});

// Remove user /api/users/:userId
router.delete('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
