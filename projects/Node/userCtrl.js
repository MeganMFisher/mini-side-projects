var users = require('./users.js')

exports.readAll = function(){
    return users.find();
}

exports.findUserById = function(userId) {
    var user = users.findOne('id', userId);
    if(user === user) {
        return user;
    } else {
        return null;
    }
}

exports.getAdmins = function() {
    var admin = users.find('type', 'admin')
    if(admin === admin) {
        return admin;
    } else {
        return null;
    }
}

exports.getNonAdmins = function(){
    var nonAdmin = users.find('type', 'user')
    if(nonAdmin === nonAdmin) {
        return nonAdmin;
    } else {
        return null;
    }
}

exports.getUsersByFavorite = function(favorite){
    var nonAdmins = users.find();
    var fav = nonAdmins.filter(function(user){
        if(user.favorites.indexOf(favorite) !== -1) {
            return user;
        }
    })
    if(fav === fav) {
        return fav;
    } else {
        return null;
    }
}

exports.getUsersByAgeLimit = function(age){
    var nonAdmins = users.find();
     var ageUsers = nonAdmins.filter(function(user){
        return user.age < age;
     })
    if(ageUsers === ageUsers) {
        return ageUsers;
    } else {
        return null;
    }
}

exports.findUserByQuery = function(query, value){
    if(query === 'last_name') {
        var nonAdmins = users.find(query, value);
        if(nonAdmins === nonAdmins) {
            return nonAdmins;
        } else {
            return null;
        }
    }
    if(query === 'email') {
        var nonAdmins = users.find(query, value);
        if(nonAdmins === nonAdmins) {
            return nonAdmins;
        } else {
            return null;
        }
    }
    if(query === 'state') {
        var nonAdmins = users.find(query, value);
        if(nonAdmins === nonAdmins) {
            return nonAdmins;
        } else {
            return null;
        }
    }
}

exports.createUser = function(user){
    var newUser = users.add(user)
    if(newUser === newUser) {
         return newUser;
    } else {
        return null;
    }
}

exports.updateUser = function(userId, obj) {
    var update = users.update('id', userId, obj);
    return update;
}

exports.removeUser = function(userId){
    var deleteMe = users.findOne('id', userId);
    users.remove('id', userId);
    return deleteMe;

}
