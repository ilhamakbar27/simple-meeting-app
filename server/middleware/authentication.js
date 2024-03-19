const { User } = require("../models");
const { verifyToken } = require("../utils/token");

const Authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
      throw "Unauthorized";
    }
    const access_token = authorization.split(" ")[1];
    const payload = verifyToken(access_token);
    const user = await User.findOne({ where: { email: payload.email } });
    if (!user) {
      throw "Unauthorized"
    }
    req.loginInfo = {
      userId: user.id,
      email: user.email,
      name: user.name,
    };

    console.log(req.loginInfo);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = Authentication;
