const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const config = require('../config');
const Auth = require('../models/auth');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
};

const strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  try {
    const user = await Auth.findOne({ _id: jwt_payload.id });
    next(null, user);
  }
  catch (error) {
    next(error, false);
  }
});

passport.use(strategy);

module.exports = passport;