const router = require('express').Router();
const { models: { User } } = require('../db');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

// POST /auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const { firstName, lastName, address, password, email} = req.body
    const user = await User.create( {firstName, lastName, address, password, email} );
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

// GET /auth/me
// router.get('/me', async (req, res, next) => {
//   console.log(`***********req.headers: ${req.headers.authorization}`)
//   try {
//     res.send(await User.findByToken(req.headers.authorization));
//   } catch (ex) {
//     next(ex);
//   }
// });

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization, {
      attributes: ['firstName', 'lastName', 'address']
    });
    res.send(user)
  } catch (ex) {
    next(ex);
  }
});
