import Topic from "../models/Topic.js";
import User from "../models/User.js";

export const getTopics = async (req, res) => {
  try {
    const { id: userid } = req.user;
    const user = await User.findOne({ userid: Number(userid) });
    if (!user) return res.status(404).json({ message: "User not found" });
    const topics = await Topic.find({ userId: Number(userid) });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getsubtopicsdata = async (req, res) => {
  const { id: userid } = req.user;
  const user = await User.findOne({ userid: Number(userid) });
  if (!user) return res.status(404).json({ message: "User not found" });

  const topics = await Topic.find({ userId: Number(userid) });

  let total = { EASY: 0, MEDIUM: 0, HARD: 0 };
  let done = { EASY: 0, MEDIUM: 0, HARD: 0 };

  topics.forEach(topic => {
    topic.subTopics.forEach(subtopic => {
      total[subtopic.level]++;
      if (subtopic.status === "Done") {
        done[subtopic.level]++;
      }
    });
  });

const percentage = {
    EASY: total.EASY ? ((done.EASY / total.EASY) * 100).toFixed(2) : 0,
    MEDIUM: total.MEDIUM ? ((done.MEDIUM / total.MEDIUM) * 100).toFixed(2) : 0,
    HARD: total.HARD ? ((done.HARD / total.HARD) * 100).toFixed(2) : 0,
  };
  res.json(percentage);
};

export const updateSubTopics= async (req, res) => {
  const { topicId } = req.params;
  const { subIdx } = req.body;

  try {
    const topic = await Topic.findById(topicId);
    if (!topic) return res.status(404).json({ msg: "Topic not found" });

    topic.subTopics[subIdx].status =
      topic.subTopics[subIdx].status === "Done" ? "Pending" : "Done";

    const allDone = topic.subTopics.every((s) => s.status === "Done");
    topic.status = allDone ? "Done" : "Pending";

    await topic.save();

    res.json(topic);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
