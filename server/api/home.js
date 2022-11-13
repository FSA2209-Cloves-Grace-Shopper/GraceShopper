const router = require('express').Router();
const {
  models: { User, Order },
} = require('../db');
module.exports = router;

// api/home
router.get('/', async (req, res, next) => {
  try {
    const orderNum = await Order.findOne({
      where: {
        completed: false,
        userId: req.query.userId,
      },
    });
    res.send(orderNum);
  } catch (err) {
    next(err);
  }
});
