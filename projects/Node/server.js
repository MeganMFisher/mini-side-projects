var express = require('express'); 
var bodyParser = require('body-parser');
var controller = require('./userCtrl.js')
// var port = 3000;


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/users', function(req, res){
    if(req.query === 'favorites') {
        var nonAdmins = controller.getUsersByFavorite(req.query.favorites);
        if(nonAdmins === nonAdmins) {
            return res.status(200).send(nonAdmins);
        } else {
            return res.sendStatus(404);
        }
    } else if(req.query === 'age') {
        var nonAdmins = controller.getUsersByAgeLimit(req.query.age);
        if(nonAdmins === nonAdmins) {
            return res.status(200).send(nonAdmins);
        } else {
            return res.sendStatus(404);
        }
    } else if(req.query === 'last_name') {
        var nonAdmins = controller.findUserByQuery(req.query.last_name);
        if(nonAdmins === nonAdmins) {
            return res.status(200).send(nonAdmins);
        } else {
            return res.sendStatus(404);
        }
    } else if(req.query === 'email') {
        var nonAdmins = controller.findUserByQuery(req.query.email);
        if(nonAdmins === nonAdmins) {
            return res.status(200).send(nonAdmins)
        } else {
            return res.sendStatus(404);
        }
    } else {
        var nonAdmins = controller.readAll();
        if(nonAdmins) {
            return res.status(200).send(nonAdmins);
        } else {
            return res.sendStatus(404);
        }
    }


})

app.get('/api/users/:userId',function(req, res){
  var user = controller.findUserById(Number(req.params.userId))
   if(user === user) {
     return res.status(200).send(user);
   } else {
      return res.sendStatus(404);
    }
});


app.get('/api/admins', function(req, res){
    var admins = controller.getAdmins();
    res.status(200).send(admins);
})

app.get('/api/nonadmins', function(req, res){
    var nonadmins = controller.getNonAdmins();
    res.status(200).send(nonadmins);
})

app.put('/api/users/:userId', function(req, res){
  var putMe = controller.updateUser(Number(req.params.userId), req.body);
    if (putMe === putMe) {
      return res.status(200).send(putMe);
    } else {
      return res.sendStatus(404);
  }
})

app.post('/api/users', function(req, res){
    var postMe = controller.createUser(req.body);
    if(postMe === postMe) {
        return res.status(200).send(postMe);
    } else {
        return res.sendStatus(404);
    }
})

app.delete('/api/users/:userId', function(req, res){
    var deleteMe = controller.removeUser(Number(req.params.userId))
    if (deleteMe === deleteMe) {
        return res.status(200).send(deleteMe);
    } else {
        return res.sendStatus(404);
    }
})




// app.listen(port, function() {
//     console.log('Listening on port ', port)
// })


module.exports = app; 