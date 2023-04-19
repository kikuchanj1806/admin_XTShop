const productRouter = require('./products');
function route(app) {
      app.use("/", productRouter);
}

module.exports = route;
