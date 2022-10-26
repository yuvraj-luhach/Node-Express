const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "john") {
    // attaching the user property to request
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = authorize;
