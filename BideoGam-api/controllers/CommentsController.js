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