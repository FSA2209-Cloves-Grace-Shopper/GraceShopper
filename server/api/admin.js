const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
module.exports = router;

// api/admin/:userId
router.put('/:userId', isAdmin, async (req, res, next) => {
  // console.log(req);
  try {
    const updateUser = await User.update(req.body, {
      attributes: ['firstName', 'lastName', 'address', 'email', 'role'],
      where: {
        id: req.params.userId,
      },
      individualHooks: true,
      returning: true,
    });
    res.send(updateUser[1][0]);
  } catch (err) {
    next(err);
  }
});

// api/admin/search
router.get('/search', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findOne(
      { where: { email: req.query.email } },
      {
        attributes: ['firstName', 'lastName', 'address', 'email', 'role'],
      }
    );
    res.send(user);
  } catch (err) {
    next(err);
  }
});
