const service = require('./tasks.service');

const getTasks = function (req, res) {
    service.getTasks(req).then(function (tasks) {
        res.status(200).send(tasks);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const getTaskById = function (req, res) {
    service.getTaskById(req).then(function (tasks) {
        res.status(200).send(tasks);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const saveTask = function (req, res) {
    service.saveTask(req).then(function (task) {
        res.status(200).send("Tasks saved successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const updateTask = function (req, res) {
    service.updateTask(req).then(function (task) {
        res.status(201).send("Tasks updated successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const deleteTask = function (req, res) {
    service.deleteTask(req).then(function (task) {
        res.status(200).send("Tasks deleted successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask
}