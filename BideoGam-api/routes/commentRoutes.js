const CommentsController = require('../controllers/CommentsController');

module.exports = (app) => {
    app.route("/comments")
        .get(CommentsController.getAll)
        .post(CommentsController.create)
    app.route("/comments/:id")
        .get(CommentsController.getById)
        .delete(CommentsController.deleteById)
}