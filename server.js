const { response } = require('express');
const express = require('express');
const app = express();

//port , and response function 
app.listen(8080, function() {
    console.log('hi ! listening on 8080 ... ');
});

//  function(요청 , 응답)
app.get('/beauty', function(req, res) {
    res.send('Pet shopping page')
    console.log('accessed to the Pet');
});