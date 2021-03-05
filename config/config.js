const env         = process.env.NODE_ENV || '';
const path        = require('path');
const rootPath    = path.normalize(__dirname + '/..');
require('dotenv').config({ path : rootPath + '/.env' + (env ? '.' + env : '') });

function createConfig() {
  return {
    db: {
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      db: process.env.MYSQL_DB,
      host: process.env.HOST
    },
    app: {
      name: process.env.APP_NAME
    },
    connection: process.env.MYSQL_CONNECTION_LIMIT,
    port : process.env.PORT,
    secret : process.env.SECRET
  }
}

module.exports = {
  createConfig: createConfig
};
