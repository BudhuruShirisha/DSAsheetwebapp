import mongoose from "mongoose";

const subTopicSchema = new mongoose.Schema({
  name: String,
  leetcode: String,
  youtube: String,
  article: String,
  level: { type: String, enum: ["EASY", "MEDIUM", "HARD"], default: "EASY" },
  status: { type: String, enum: ["Pending", "Done"], default: "Pending" }
});

const topicSchema = new mongoose.Schema({
  name: String,
  subTopics: [subTopicSchema],
  userId: { type: Number, ref: "User" } 
});

export default mongoose.model("Topic", topicSchema);
