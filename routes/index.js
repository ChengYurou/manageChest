module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '衣搭搭' });
  });
};