const express         = require('express');
const mysql           = require('mysql');
const bodyParser      = require('body-parser');
const cors            = require('cors');
const passport        = require('passport');
const app             = express();
const router          = express.Router();
const server          = require('http').Server(app);
const env             = process.env.NODE_ENV || '';
const path            = require('path');
const rootPath        = path.normalize(__dirname + '/..');
const config          = require('./config/config').createConfig();

require('dotenv').config({ path : rootPath + '/.env' + (env ? '.' + env : '') });
require('./config/passport');

const pool = mysql.createConnection({
  host     : config.db.host,
  user     : config.db.user,
  password : config.db.password,
  database : config.db.db,
  connectionLimit: config.connection
});

app.env = env;
app.config = config;
app.name = config.app.name;
app.secret = config.secret;
app.pool = pool;

global.config = config;
global.pool = pool;


//Headers configurations
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, PUT, OPTIONS")
  next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({origin: true, credentials: true}));

app.use(function (req, res, next) {
  req.pool = global.pool;
  next();
})

//Helpers encrypts password
app.use(passport.initialize());
app.use(passport.session());

require('./modules/routes.js')(app, router);

app.use('/', router);

server.listen(config.port, () => console.log(`API ReactJS init in port:  ${config.port}!`));
