require('dotenv').config();

const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const jwt = require('koa-jwt');

const app = new Koa();
const router = new Router();

const apiRouter = require('./src');

app.on('error', (err) => {
  console.error(err);
});

app
  .use(cors())
  .use(bodyParser())
  .use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const end = new Date().getTime();

    if (process.env.VERBOSE) {
      console.log(`[REQ] [${ctx.method}] ${ctx.path}`, ctx.request.body);
      console.log(`[RES] ${ctx.method} ${ctx.path} ${ctx.status} - ${end - start}ms`);
    }
  })
  .use(jwt({
    secret: process.env.SECRET,
  }).unless({ path: [/^\/api\/auth*/] }))
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())
  .listen(process.env.PORT);

console.log(`Listening on port ${process.env.PORT}`); // eslint-disable-line
