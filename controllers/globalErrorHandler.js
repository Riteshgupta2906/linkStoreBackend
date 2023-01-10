const sendErrorDev = (err, res) => {
  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err, res) => {
  //operational Error
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  //programming error
  else {
    console.error('Error **', err);
    res.status(500).json({
      status: 'Error',
      message: 'Something went Wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  //global middle Ware for error it receives a err as a parameter
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV == 'production') {
    sendErrorProd(err, res);
  }
};
