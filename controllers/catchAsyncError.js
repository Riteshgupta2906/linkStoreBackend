module.exports = (fn) => {
  // the async function is passed as and argument and this function return a another function which then be called by the express so that we can get rid of the try catch block
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
    //fn(req, res, next).catch( next);  can be written as this ,it will automatically call next with the err parameter
  };
};
