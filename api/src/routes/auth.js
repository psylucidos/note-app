const Router = require('@koa/router');
const AppUserController = require('../controllers/appuser');
const { hashPassword, handleError } = require('../../utils');

const router = new Router();
router.prefix('/auth');

router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body;

  const result = await AppUserController
    .findUserByEmail(email);

  // TODO: implement timing safe hash comparison
  if (result.password === hashPassword(password)) {
    ctx.status = 200;
    // TODO: implement JWT
  } else {
    ctx.status = 403;
  }
});

router.post('/register', async (ctx) => {
  const { email, password } = ctx.request.body;

  const result = await AppUserController
    .findUserByEmail(email);

  if (result._id) {
    ctx.status = 403;
  } else {
    const createdUser = await AppUserController
      .createUser(email, password);

    if (createdUser._id) {
      ctx.status = 201;
      // TODO: implement JWT
    } else {
      ctx.status = 500;
      handleError(createUser);
    }
  }
});

module.exports = router;
