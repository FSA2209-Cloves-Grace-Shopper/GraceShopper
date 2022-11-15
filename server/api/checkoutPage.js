const router = require('express').Router();
const {
  models: { OrderHistory },
} = require('../db');
module.exports = router;

// Add new order to OrderHistory /api/checkoutpage
router.post('/', async (req, res, next) => {
  const { firstName, lastName, address, email, orderId, userId } = req.body;
  try {
    const savedOrder = await OrderHistory.create({
      firstName,
      lastName,
      address,
      email,
      orderId,
      userId,
    });
    res.send(savedOrder);
  } catch (err) {
    next(err);
  }
});
