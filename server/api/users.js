const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

// Get all users /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
// Get single user /api/users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "email"],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Update user /api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },
      returning: true,
    });
    res.send(updateUser);
  } catch (err) {
    next(err);
  }
});
// Add new user /api/users
router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

// Remove user /api/users/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
