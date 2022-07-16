const service = require('./admin.service');

const getAdmins = function (req, res) {
    service.getAdmins(req).then(function (admins) {
        res.status(200).send(admins);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const getAdminById = function (req, res) {
    service.getAdminById(req).then(function (admins) {
        res.status(200).send(admins);
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const saveAdmin = function (req, res) {
    service.saveAdmin(req).then(function (admin) {
        res.status(200).send("Admin saved successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const updateAdmin = function (req, res) {
    service.updateAdmin(req).then(function (admin) {
        res.status(201).send("Admin updated successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

const deleteAdmin = function (req, res) {
    service.deleteAdmin(req).then(function (admin) {
        res.status(200).send("Admin deleted successfully");
    }).catch(function (e) {
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getAdmins,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}