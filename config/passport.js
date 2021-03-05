const passport        = require('passport');
const LocalStrategy   = require('passport-local').Strategy;
const helper          = require('./../modules/user/user.helper');

async function initPassport() {
  passport.use('localLogin', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      let connection = req.pool;
      let data = { email : email, password : password };

      try {
        let user = await helper.findUserByEmail(data, connection);

        if(!user) {
          return done(null, false, { msg: `Este nombre de usuario ${email} no existe.` });
        } else {
          let match = await helper.comparePasswordHash(data, connection);
          
          let obj = { email : email, valid : match.valid };
          return done(null, true, obj);
        }

      } catch(e) {
        console.log('e: ', e);
        return done(err, false, '');
      }
    }
  ));
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('llega aqui todo bien');
});

module.exports = {
  initPassport: initPassport
}
