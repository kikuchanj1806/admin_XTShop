const productRouter = require('./products');
const userRouter = require('./users');
function route(app) {
      app.use("/product", productRouter);
      app.use("/user", userRouter);
}

module.exports = route;
