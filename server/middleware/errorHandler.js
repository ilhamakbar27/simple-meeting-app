const ErrorHandler = (error, req, res, next) => {
  console.log(error);
  let status = 500;
  let message = "Internal Server Error";

  if (error === "Invalid credentials") {
    status = 401;
    message = "Invalid Email or Password";
  }
  if (error.name === "SequelizeValidationError") {
    status = 400;
    message = error.errors[0].message;
  }
  if (error.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = error.errors[0].message;
  }
  res.status(status).json({ message });
};

module.exports = ErrorHandler;
