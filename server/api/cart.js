const router = require('express').Router();
const { models: { OrderProduct, Product } } = require('../db');
const { requireToken } = require('./gatekeepingMiddleware');
module.exports = router;
// api/cart



router.get('/', requireToken, async (req, res, next) => {
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
router.delete('/', requireToken, async (req, res, next) => {
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
router.put('/', requireToken, async (req, res, next) => {
  try {
    const item = await OrderProduct.findOne({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId,
      },
    });
    await item.update({
      quantity: req.body.qty,
      productSubtotal: req.body.qty * item.unitPrice,
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});