
class Response {
  static async success(req, res, data, message, status) {
    return res.status(status).json({
      status: "success",
      data,
    });
  }

  static async error(req, res, message, status) {
    return res.status(status).json({
      status: "failed",
      message
    });
  }
}

module.exports = Response;
