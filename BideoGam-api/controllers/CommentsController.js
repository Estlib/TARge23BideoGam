const {db} = require("../db");
const Utils = require("./utils");

exports.getAll = async (req,res) => {
    const allcomments = await db.comments.findAll();
    console.log(allcomments)
    res
    .send(allcomments
        .map((
            {CommentID: CommentText}) =>
            {return {CommentID: CommentText}}
        )
    )
}

exports.getById = async (req, res) => {
    const comment = await getComment(req, res);
    if (!comment) { return };
    return res.send(comment);
}

const getComment = async (req, res) => {
    const idNumber = parseInt(req.params.CommentID);
    if (isNaN(idNumber)) {
        res.status(400).send({error: `Invalid comment ID ${req.params.CommentID}`});
        return null;
    }
    const comment = await db.comments.findByPk(idNumber);
    if (!comment) {
        res.status(404).send({error: `Comment with ID ${idNumber} not found`});
        return null;
    }
    return comment;
}