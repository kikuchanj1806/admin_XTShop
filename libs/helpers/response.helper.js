
class Response {
  static async success(req, res, data, message, status = 200) {
    return res.status(status).json({
      status: "success",
      data,
    });
  }

  static async error(req, res, message, status = 500) {
    return res.status(status).json({
      status: "failed",
      message
    });
  }
}

module.exports = Response;
