const service = require('./users.service');

const getUsers = function(req, res) {
    service.getUsers(req).then(function(users) {
        res.status(200).send(users);
    }).catch(function(e) {
        res.status(500).send("Internal server error");
    })
}

const getUserById = function(req,res) {
    service.getUserById(req).then(function(users) {
        res.status(200).send(users);
    }).catch(function(e) {
        res.status(500).send("Internal server error");
    })
}

const saveUser = function(req, res) {
    service.saveUser(req).then(function (user) {
        res.status(200).send("Users saved successfully");
    }).catch(function(e) {
        res.status(500).send("Internal server error");
    })
}

const updateUser = function(req, res) {
    service.updateUser(req).then(function (user) {
        res.status(201).send("Users updated successfully");
    }).catch(function(e) {
        res.status(500).send("Internal server error");
    })

}

const deleteUser = function(req, res) {
    service.deleteUser(req).then(function (user) {
        res.status(200).send("Users deleted successfully");
    }).catch(function(e) {
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}