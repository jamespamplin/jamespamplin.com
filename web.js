var express = require('express'),
    morgan = require('morgan'),

    app = express(),
    jade = require('jade'),
    sass = require('node-sass'),

    moment = require('moment');

app.use(morgan('combined'));

// node-sass filter hacked into Jade
// TODO: PR ForbesLindesay/transformers
jade.filters['node-sass'] = function(str, options) {
  var sassOptions = {
    sourceComments: 'map',
    outputStyle: 'compressed',
    outFile: options.outFile
  };

  if (options.filename) {
    sassOptions.file = options.filename;
  } else {
    sassOptions.data = str;
  }

  var result = sass.renderSync(sassOptions);
  return result.css.toString();
};

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    var metadata = require('./content/about.meta.json');
    res.render(
        'about',
        {
            title: metadata.name,
            debug: false,
            meta: metadata
        }
    );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
