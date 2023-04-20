require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const logger = require("./libs/utils/logger");
const swaggerDocument = require("./libs/swagger/rule.json");
const { connectDB } = require("./apps/configs");
const route = require("./apps/routers");

const app = express();
const port = process.env.PORT || 3000;
const _logger = new logger("XT Shop");
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
    res.send('SERVER ON')
})
route(app);

app.listen(port, () => {
    _logger.info(`Running with http://localhost:${port}`);
    _logger.info(`Document: http://localhost:${port}/documentation`);
});
