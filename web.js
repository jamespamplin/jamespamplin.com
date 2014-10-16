var express = require('express'),
    morgan = require('morgan'),

    app = express(),

    Poet = require('poet'),

    moment = require('moment');

app.use(morgan('combined'));

var poet = Poet(app, {
      posts: './posts/',
      postsPerPage: 5,
      metaFormat: 'json'
    });

poet.watch().init().then(function () {

  var post;
  for (var postId in poet.posts) {
    post = poet.posts[postId];
    post.dateFormatted = moment(post.date).format('DD MMMM YYYY');
  }

});


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Blog'
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
