const router = require('express').Router();
const {
  models: { OrderHistory },
} = require('../db');
module.exports = router;

// Add new order to OrderHistory /api/orders
router.post('/', async (req, res, next) => {
  try {
    res.send();
  } catch (err) {
    next(err);
  }
});
