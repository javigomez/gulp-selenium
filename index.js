var gutil = require('gulp-util'),
    path = require('path');

module.exports = function() {
  var GulpSelenium = {
    path: path.resolve(__dirname,
      'selenium/selenium-server-standalone-2.43.0.jar'),
    chromeDriverPath: path.resolve(__dirname, 'selenium/chromedriver')
  };

  gutil.log('Using Selenium Server at', GulpSelenium.path);

  return GulpSelenium;
};
