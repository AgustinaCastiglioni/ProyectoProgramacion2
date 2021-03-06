var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var homeRouter = require('./routes/home');
var generoRouter = require('./routes/genero');
var busquedaRouter = require('./routes/busqueda');
var bienvenidaRouter = require('./routes/bienvenida');
var registracionRouter = require('./routes/registracion');
var resenasRouter = require('./routes/resenas');
var usuarioRouter = require('./routes/usuario');
var busquedaUsuariosRouter = require('./routes/busquedaUsuarios');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', homeRouter);
app.use('/genero', generoRouter);
app.use('/busqueda', busquedaRouter);
app.use('/bienvenida', bienvenidaRouter);
app.use('/registracion', registracionRouter);
app.use('/resenas', resenasRouter);
app.use('/usuario', usuarioRouter);
app.use('/searchUsers', busquedaUsuariosRouter);

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

module.exports = app;
