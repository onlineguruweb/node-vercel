const express = require("express");
const router = express.Router();
// const {getPost} = require('../Controller/PostController.js')
 
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

// router.get("/posts",getPost);

module.exports = router;
