const errorTypes = {
  "Invalid credentials": { status: 401, message: "Invalid Email or Password" },
  "Invalid token": { status: 401, message: "Invalid token" },
  "Not found": { status: 404, message: "Data not found" },
  "Unauthorized": { status: 401, message: "Please login first" },
  SequelizeValidationError: { status: 400 },
  SequelizeUniqueConstraintError: { status: 400 },
};

const ErrorHandler = (error, req, res, next) => {
  console.log(error);

  let status = errorTypes[error] ? errorTypes[error].status : 500;
  let message = errorTypes[error]
    ? errorTypes[error].message
    : "Internal Server Error";

  if (error.name && errorTypes[error.name]) {
    status = errorTypes[error.name].status;
    message = error.errors[0].message;
  }

  res.status(status).json({ message });
};

module.exports = ErrorHandler;
