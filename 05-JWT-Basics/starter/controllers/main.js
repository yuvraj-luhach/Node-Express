//check username, password in post(login) request
// if exist create new JWT if not send back error response
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const customApiError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  // mongoose validation
  // JOI
  // check in the controller

  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //   demo, normally provided by DB
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // console.log(username, password);
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const user = req.user;
  //   console.log(user);

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber} `,
  });
};

module.exports = { login, dashboard };
