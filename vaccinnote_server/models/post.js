const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Number, required: true, default: 0 },
  tags: [{ type: String, default: null }], // 복수개는 배열로
  publishedDate: { type: Date, default: new Date() },
  updateDate: { type: Date, default: null },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  comments: [
    {
      commentWriter: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      commentContent: { type: String, default: null, required: true },
      commentDate: { type: Date, default: new Date() },
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
