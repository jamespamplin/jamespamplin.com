var express = require('express'),
    morgan = require('morgan'),

    app = express(),
    jade = require('jade'),
    sass = require('node-sass'),

    Poet = require('poet'),

    moment = require('moment');

app.use(morgan('combined'));

var poet = Poet(app, {
      posts: './posts/',
      postsPerPage: 5,
      metaFormat: 'json'
    });

if (process.env.NODE_ENV !== 'production') {
  poet = poet.watch();
}

poet.init().then(function () {

  var post;
  for (var postId in poet.posts) {
    post = poet.posts[postId];
    post.isoDate = moment(post.date).format('YYYY-MM-DD');
    post.dateFormatted = moment(post.date).format('DD MMMM YYYY');
  }

});

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
  res.render('index', {
    title: 'Blog',
    contentSchema: 'http://schema.org/Blog'
  });
});

app.get('/about', function (req, res) {
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
