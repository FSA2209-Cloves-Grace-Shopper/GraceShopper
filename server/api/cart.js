const router = require('express').Router();
const {
  models: { OrderProduct, Product },
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
    // console.log(cart);

    const mappedCart = await Promise.all(
      cart.map(async (cur) => {
        const [img, name] = await getImg(cur.productId);
        cur.dataValues.imageUrl = img;
        cur.dataValues.name = name;
        // console.log(cur);
        return cur;
      })
    );
    res.send(mappedCart);
  } catch (err) {
    next(err);
  }
});
