const router = require('express').Router();
const {
  models: { User, Order },
} = require('../db');
module.exports = router;

// api/home
router.get('/', async (req, res, next) => {
  console.log('******', req.query);
  try {
    let order = await Order.findOne({
      where: {
        completed: false,
        userId: Number(req.query.userId),
      },
    });

    if (!order) {
      order = await Order.create({
        completed: false,
        userId: Number(req.query.userId),
      });
    }
    res.send(order);
  } catch (err) {
    next(err);
  }
});
