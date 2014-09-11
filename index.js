var gutil = require('gulp-util'),
    path = require('path');

module.exports = function() {
  var GulpSelenium = {
    path: path.resolve('./selenium/selenium-server-standalone-2.43.0.jar')
  }

  gutil.log('Using Selenium Server at', GulpSelenium.path);

  return GulpSelenium;
}
