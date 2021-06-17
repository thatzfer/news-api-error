var express = require('express');
// var fs = require('fs');
var router = express.Router();
var CustomError = require('../errors/custom_error');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // criando um erro de modo mais elegante usando o next dentro do express:
  // next (new Error ('Erro de teste next'));
  // res.send('respond with a resource');
 
  try{
    fs.readFile('demofile1.html', function(err, data) {
    
      if (err){
        next (new Error('Tem nada aqui não meu filho'));
      }
      else {
        res.send('Arquivo encontrado');
      }
    });
  }
  catch (err){
    next(new CustomError('Teste CustomError.'));
  }
});

module.exports = router;
