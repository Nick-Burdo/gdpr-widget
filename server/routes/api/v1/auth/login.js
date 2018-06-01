const jwt = require('jsonwebtoken');
const Auth = require('../../../../models/auth');
const config = require('../../../../config/index');

module.exports = async (req, res)  => {
  const { username, password } = req.body;
  try {
    const user = await Auth.findOne({ username });
    const matches = await user.checkPassword(password);
    if (matches) {
      const payload = { id: user.id };
      const token = jwt.sign(payload, config.secret);
      res.json({ message: "OK", token: token });
    } else {
      res.status(401).json({ message: "passwords did not match" });
    }
  } catch (error) {

    console.error({...error});

    res.status(401).json({ message: "No such user found" });
  }
};
