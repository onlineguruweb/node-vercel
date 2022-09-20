const Posts = require('../Models/PostModel.js');


const getPost = async (req,res) =>{
    let posts = await Posts.find({});
    res.status(200).json(posts);
}

module.exports = {getPost}