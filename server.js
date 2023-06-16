var createError = require('http-errors');
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')
var fs = require('fs')
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var app = require('../server');
var debug = require('debug')('library:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);

    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

app.use(favicon(path.join(__dirname,'public','favicon.ico')));

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err)=>{});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.use(cors());

// app.get('/api',(req, res) => {

//   const json = fs.readFileSync('count.json', 'utf-8');
//   const obj = JSON.parse(json);
//   // Reads count.json and converts to JS object

//   obj.pageviews = obj.pageviews+1;
//   if (req.query.type === 'visit-pageview') {
//       obj.visits = obj.visits+1;
//   }
//   // Updates pageviews and visits (conditional upon URL param value)

//   const newJSON = JSON.stringify(obj);
//   // Converts result to JSON

//   fs.writeFileSync('count.json', newJSON);
//   res.send(newJSON);
//   // Writes result to file and sends to user as JSON
//   console.log(newJSON);
// })

module.exports = app;
