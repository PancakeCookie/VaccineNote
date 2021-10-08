const post = require("../../models/post");

const postController = {
  uploadPost: async (req, res) => {
    const userInfo = req.userInfo;

    const { title, content, tags, category } = req.body;

    const postModel = new post({
      title,
      content,
      category,
      tags,
      writer: userInfo._id,
    });

    try {
      const result = await postModel.save();
      res.status(200).json({
        message: "저장 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = postController;
