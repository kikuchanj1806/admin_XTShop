const productRouter = require('./products');
const userRouter = require('./users');
function route(app) {
      app.use("/", productRouter);
      app.use("/user", userRouter);
}

module.exports = route;
