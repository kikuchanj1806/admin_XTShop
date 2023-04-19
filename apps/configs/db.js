const mongoose = require("mongoose");
const Logger = require("../../libs/utils/logger");

const _logger = new Logger("DB");
// const conn = process.env.DATABASE_LOCAL
//   ? process.env.DATABASE_LOCAL
//   : process.env.DATABASE_URL;
const conn = 'mongodb://127.0.0.1:27017/xtshop';
const connOps = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(conn, connOps);
    _logger.info("DB connected...");
  } catch (error) {
    _logger.warning("DB connected error");
    _logger.error(error);
    process.exit(1);
  }
};
