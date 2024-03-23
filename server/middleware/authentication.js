const { User, Client } = require("../models");
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
    const client = await Client.findOne({ where: { email: payload.email } });
  
    const account = user || client;

    if (!account) {
      throw "Unauthorized";
    }

    req.loginInfo = {
      userId: account.id,
      email: account.email,
      credit: account?.credit,
      name: account.name,
      isUser: Boolean(user),
    };

    console.log(req.loginInfo);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = Authentication;
