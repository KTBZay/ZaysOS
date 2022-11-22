var express = require('express');
const fs = require('fs')
const commands = fs.readdirSync('./app/commands').filter(file => file.endsWith('.js'));
const { TOKEN1, TOKEN2, ID1, ID2 } = require('../../../../server.config');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ZaysOS - Dashboard', TOKEN1: TOKEN1, TOKEN2: TOKEN2, ID1: ID1, ID2: ID2 });
});
/* GET CMDS page. */
router.get('/cmds', function(req,res,next){
  res.render('cmds', {
    title: 'ZaysOS - Dashboard',
    cmds: commands
  })
})
module.exports = router;
