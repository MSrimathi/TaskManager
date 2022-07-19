const userService = require('../../api/users/users.service');

const getUsers = function (req, res) {
    // const stdObj = {
    //     name: 'Arun',
    //     age: 23
    // }

    // const nameArr = ['Sri', 'Mani', 'Ragavi', 'Dhanwin'];
    // const stdArr = [
    //     {
    //         name: 'Sri',
    //         mailId: 'msrimathi28@gmail.com'
    //     },
    //     {
    //         name: 'Abi',
    //         mailId: 'abisubu14@gmail.com'
    //     }
    // ]

    userService.getUsers(req).then(function (user) {
        console.log("users", user);
        res.render('users', {
            title: 'Users',
            user
            // name: 'Arun',
            // stdObj,
            // nameArr,
            // author: true
        });
    }).catch(function(error) {
        res.status(500).send("Unable to render the page");
    })
}

const addUser = function (req, res) {
    res.render('addUser');
}

const editUser = function (req, res) {
    res.render('addUser');
}

module.exports = {
    getUsers,
    addUser,
    editUser
}