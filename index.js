var express = require('express');
var app = express();

var log = require('saga-logger')
  .create({ module: 'server' });

var bodyParser = require('body-parser');

var request = require('request-promise');

var env = process.env;

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/:id', function (req, res) {
  res.render(req.params.id);
});

app.post('/mail', function (req, res) {
  var slackWebhook = env.SLACK_WEBHOOK;

  var options = {
    method: 'POST',
    uri: slackWebhook,
    body: {
      text: 'You\'ve received a message on the website, bisous',
      attachments: [
        {
          fields: [
            {
              title: 'name',
              value: req.body.name,
              short: false
            },
            {
              title: 'surname',
              value: req.body.surname,
              short: false
            },
            {
              title: 'company',
              value: req.body.company,
              short: false
            },
            {
              title: 'mail',
              value: req.body.mail,
              short: false
            },
            {
              title: 'text',
              value: req.body.text,
              short: false
            }
          ]
        }
      ]
    },
    json: true
  };

  request(options)
    .then(function (parsedBody) {
      log.info('slack-sent', parsedBody, options);
      res.status(200).send(parsedBody);
    })
    .catch(function (err) {
      log.error('slack-error', err, options);
      res.status(500).send(err);
    });
});

app.listen(env.APP_PORT, function () {
  log.info('server-started', { port: env.APP_PORT });
});
