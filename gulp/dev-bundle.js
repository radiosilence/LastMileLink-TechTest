import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import webpackMiddleWare from 'webpack-dev-middleware';

import webpackConfig from '../webpack/webpack.dev-bundle.config';

gulp.task('dev-bundle', ['yarn', 'lint', 'clean'], () => {
  const app = express();
  const bundler = webpack(webpackConfig);
  bundler.watch({
    aggregateTimeout: 300,
    poll: false,
  }, (err, stats) => {
    if (err) {
      return console.error(err);
    }
    console.log(stats.toString({
      colors: true,
      chunks: false,
      modules: false,
    }));
    });
  app.use(webpackMiddleWare(bundler, {
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: "/assets/",
    index: "index.html",
    stats: {
      colors: true
    },
  }));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });
  app.listen(3000, () => {
    console.log('Listening on 3000');
  });
});
