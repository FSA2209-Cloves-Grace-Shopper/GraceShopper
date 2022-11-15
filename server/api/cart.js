const router = require('express').Router();
const {
  models: { OrderProduct, Product, Order, User },
} = require('../db');
module.exports = router;
// api/cart

router.get('/', async (req, res, next) => {
  const getImg = async (pid) => {
    const prod = await Product.findOne({
      where: {
        id: pid,
      },
    });
    return [prod.imageUrl, prod.name];
  };

  try {
    const cart = await OrderProduct.findAll({
      where: { orderId: req.query.orderId },
    });

    const mappedCart = await Promise.all(
      cart.map(async (cur) => {
        const [img, name] = await getImg(cur.productId);
        cur.dataValues.imageUrl = img;
        cur.dataValues.name = name;
        return cur;
      })
    );
    res.send(mappedCart);
  } catch (err) {
    next(err);
  }
});

// Remove cart item /api/cart/
router.delete('/', async (req, res, next) => {
  try {
    await OrderProduct.destroy({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Update cart item qty /api/cart
router.put('/', async (req, res, next) => {
  console.log('REQ BODY', req.body);
  try {
    const item = await OrderProduct.findOne({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId,
      },
    });
    await item.update({ quantity: req.body.qty });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// close order and open new one
router.post('/', async (req, res, next) => {
  const { orderId, userId } = req.body;
  try {
    const order = await Order.findOne({
      where: {
        completed: false,
        userId,
      },
    });
    console.log('before', order.completed);
    order.completed = true;
    await order.save();
    console.log('after', order.completed);
    const newOrder = await Order.create();
    newOrder.userId = userId;
    newOrder.completed = false;
    await newOrder.save();
    res.send(newOrder);
  } catch (err) {
    next(err);
  }
});
