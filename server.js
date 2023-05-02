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

app.use(favicon(path.join(__dirname,'public','favicon.ico')));

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err)=>{});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
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
