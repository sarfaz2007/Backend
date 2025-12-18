const logger = (req, res , next) => {
  console.log("Received Request:", req.url);
  next();
};

module.exports = logger;