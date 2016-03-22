'use strict';

import express from 'express';
import http from 'http';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app
  .use('/node_modules', express.static(__dirname + '/node_modules'))
  .use('/static', express.static(__dirname + '/static'))
  .use('/bower_components', express.static(__dirname + '/bower_components'))
  .use('/build', express.static(__dirname + '/build'));

const bundler = webpack(config);
const middleware = webpackMiddleware(bundler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(bundler));

/*
app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});*/

server.listen(port);
