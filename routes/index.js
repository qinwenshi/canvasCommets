var express = require('express');
var router = express.Router();

var low = require('lowdb')
var db = low('db.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kindle商业模式评论' });
});

router.get('/qingting', function(req, res, next) {
  res.render('qingting', { title: '蜻蜓FM商业模式评论' });
});

router.get('/lizhi', function(req, res, next) {
  res.render('lizhi', { title: '荔枝FM商业模式评论' });
});



router.get('/ximalayafm', function(req, res, next) {
  res.render('ximalayafm', { title: '喜马拉雅FM商业模式评论' });
});

router.get('/magic', function(req, res, next) {
  res.render('magic', { title: 'Magic商业模式评论' });
});

router.get('/dinguber', function(req, res, next) {
  res.render('dinguber', { title: 'Ding一下Uber商业模式评论' });
});

router.get('/airbnbchina', function(req, res, next) {
  res.render('airbnbchina', { title: 'AirBnB在中国商业模式评论' });
});

router.get('/guokemooc', function(req, res, next) {
  res.render('guokemooc', { title: '果壳MOOC商业模式评论' });
});

router.get('/guokezaihang', function(req, res, next) {
  res.render('guokezaihang', { title: '果壳在行商业模式评论' });
});

router.get('/douyutv', function(req, res, next) {
  res.render('douyutv', { title: '斗鱼TV商业模式评论' });
});

router.get('/innolauncher', function(req, res, next) {
  res.render('innolauncher', { title: '意启部落商业模式评论' });
});

router.get('/ubertransformation', function(req, res, next) {
  res.render('ubertransformation', { title: 'Uber与传统转型商业模式评论' });
});

router.get('/netflixtransformation', function(req, res, next) {
  res.render('netflixtransformation', { title: 'Netflix转型商业模式评论' });
});


var comments_id = '';

router.param('id', function (req, res, next, id) {
  comments_id = id;
  next();
});

router.get('/comments/:id', function(req, res, next){
    res.writeHead(200, {"Content-Type": "application/json"});
    var obj= db('commentsdb').chain().find({ id: comments_id});
    if(!obj.isUndefined().value())
        res.end(db('commentsdb').find({ id: comments_id}).comments);
    else
        res.end('{}');
});

router.post('/comments/:id', function(req, res, next){
    var obj = db('commentsdb').chain().find({ id: comments_id });
    
    if(!obj.isUndefined().value())
        db('commentsdb').remove({ id: comments_id })
    
    db('commentsdb').push({ id: comments_id, comments: req.body.comments});
        
    res.send(req.body.comments+' id--'+comments_id);
});

module.exports = router;
