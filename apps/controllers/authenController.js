const usersModel = require('../models/users.model');
const { Response } = require("../../libs/helpers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


module.exports.registerUser = async (req, res) => {
    try {
        const saltRounds = 10;
        const newUser = req.body;
        const password = await bcrypt.hash(newUser.password, saltRounds);
        const existUser = await usersModel.findOne({ username: newUser.username });
        if (existUser) {
            return Response.error(req, res, 'Người dùng đã tồn tại', 500);
        }
        const user = await usersModel.create({ ...newUser, password });
        return Response.success(req, res, { user }, "Tạo tài khoản thành công!", 200);
    } catch (error) {
        console.log(error);
    }
};

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await usersModel.findOne({ username });
        if (!user) {
            return Response.error(req, res, "Tài khoản hoặc mật khẩu không đúng", 500);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return Response.error(req, res, "Tài khoản hoặc mật khẩu không đúng", 500);
        }
        const payload = {
            userId: user._id,
            exp: 10 * 60 * 1000,
        };
        const token = await jwt.sign(payload, process.env.JWT_ACCESS_KEY);
        return Response.success(req, res, { token }, "Đăng nhập thành công", 200);
    } catch (error) {
        console.log(error);
        return Response.error(req, res, "error", 500);
    }
};
