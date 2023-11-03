const express = require('express');
const { isAuthenticated } = require('../../middlewares');
const { findUserById } = require('./users.services');

const router = express.Router();

//获取用户信息
//从认证accessToken中获取用户ID，然后使用该ID从数据库中获取用户信息。
router.get('/profile', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
