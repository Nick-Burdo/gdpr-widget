const Auth = require('../../../../models/auth');

module.exports = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: 'Incorrect request' });
    return;
  }
  Auth.create({username, password})
    .then(result => {
      res.json({
        message: 'OK',
        id: result._id
      });
    })
    .catch(error => {

      console.error({ ...error });

      if (error.code === 11000) {
        return res.status(400).json({ message: `Email ${username} already exist.` });
      }
      return res.status(500).json({ message: 'There was a problem registering the user.' });
    });
};
