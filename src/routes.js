const apiRoutes = function(app) {
    app.use('/api/users', './api/users');

}

module.exports = {
    apiRoutes
}