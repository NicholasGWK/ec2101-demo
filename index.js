const Koa = require("koa");

const app = new Koa();

app.use(ctx => {
  ctx.body = "Hello EC2 workshop!";
  ctx.status = 200;
});

app.listen(3000);
console.log("Running on 3000");
