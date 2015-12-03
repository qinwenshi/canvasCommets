var express = require('express');
var router = express.Router();

var low = require('lowdb')
var db = low('db.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '商业模式评论' });
});

router.get('/qingting', function(req, res, next) {
  res.render('qingting', { title: '商业模式评论' });
});

router.get('/lizhi', function(req, res, next) {
  res.render('lizhi', { title: '荔枝FM商业模式评论' });
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
