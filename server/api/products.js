const router = require('express').Router();
const {
  models: { Product, OrderProduct },
} = require('../db');
const Order = require('../db/models/Order');
module.exports = router;

// Get all products /api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

// Get a single product /api/products/:productid
router.get('/:productid', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.productid },
    });
    res.send(product);
  } catch (err) {
    next(err);
  }
});

// Add a product /api/products/
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    res.send(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

// Delete a product /api/products/:productid
router.delete('/:productid', async (req, res, next) => {
  try {
    await Product.destroy({ where: { id: req.params.productid } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Update a product /api/products/:productid
router.put('/:productid', async (req, res, next) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.productid,
      },
      returning: true,
    });
    res.send(updatedProduct[1][0]);
  } catch (err) {
    next(err);
  }
});

router.post('/:productid', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.body.userId,
        completed: false,
      },
    });

    const product = await OrderProduct.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId,
      },
    });

    req.body.orderId = order.id;

    if (!product) {
      await OrderProduct.create(req.body);
    } else {
      const newQuantity = product.quantity + Number(req.body.quantity);
      const newTotalPrice = Number(product.totalPrice) + req.body.totalPrice;
      await product.update({
        quantity: newQuantity,
        totalPrice: newTotalPrice,
      });
    }

    const cart = await OrderProduct.findAll({
      where: {
        orderId: order.id,
      },
    });

    res.send(cart);
  } catch (err) {
    next(err);
  }
});
