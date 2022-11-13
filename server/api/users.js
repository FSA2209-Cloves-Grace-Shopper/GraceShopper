const router = require('express').Router();
const {
  models: { User, Order },
} = require('../db');
module.exports = router;

// Get all users /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email'],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// Get single user /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'email'],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// Get order number for user /:userId/ordernum
// not restful? should be /orders/:userid/openorder?
router.get('/:userId/ordernum', async (req, res, next) => {
  try {
    const orderNum = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId,
      },
    });
    res.send(orderNum);
  } catch (err) {
    next(err);
  }
});

// Update user /api/users/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
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

// Add new user /api/users
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

// Remove user /api/users/:userId
router.delete('/:userId', async (req, res, next) => {
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
