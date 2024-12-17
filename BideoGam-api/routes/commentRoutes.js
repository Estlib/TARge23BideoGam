const CommentsController = require('../controllers/CommentsController');

module.exports = (app) => {
    app.route("/comments")
        .get(UsersController.getAll)
        .post(UsersController.create)
    app.route("/comments/:id")
        .get(UsersController.getById)
        .delete(UsersController.deleteById)
}