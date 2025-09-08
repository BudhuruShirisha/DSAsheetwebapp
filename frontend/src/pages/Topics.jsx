import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Collapse, Table, Badge } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CONSTANTS } from "../constants";
const Topics = () => {
  const [openTopic, setOpenTopic] = useState(null);
  const [topics, setTopics] = useState([]);

 useEffect(() => {
  const fetchTopics = async () => {
    try {
      const res = await axios.get(`${CONSTANTS.API_BASE_URL}/api/topics`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

      const topicsWithStatus = res.data.map((t) => {
        if (t.subTopics && t.subTopics.length > 0) {
          const allDone = t.subTopics.every((s) => s.status === "Done");
          return { ...t, status: allDone ? "Done" : "Pending" };
        }
        return { ...t, status: t.status || "Pending", subTopics: [] };
      });

      setTopics(topicsWithStatus || []);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  fetchTopics();
}, []);

const handleSubtopicChange = async (topicId, subIdx) => {
  const updatedTopics = topics.map((topic) => {
    if (topic._id === topicId) {
      const updatedSubTopics = topic.subTopics.map((sub, idx) => {
        if (idx === subIdx) {
          return { ...sub, status: sub.status === "Done" ? "Pending" : "Done" };
        }
        return sub;
      });

      const allDone = updatedSubTopics.every((s) => s.status === "Done");

      return {
        ...topic,
        subTopics: updatedSubTopics,
        status: allDone ? "Done" : "Pending",
      };
    }
    return topic;
  });

  setTopics(updatedTopics);

  // ✅ Save to backend
  try {
    await axios.put(
      `${API_URL}/api/topics/update/${topicId}`,
      { subIdx },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  } catch (err) {
    console.error("Error updating subtopic status:", err);
  }
};


  return (
    <div className="container-fluid p-0">


      {/* Topics Section */}
      <div className="container mt-4">
        <h3 className="text-center fw-bold">Topics</h3>
        {topics.map((topic, index) => {
          const topicKey = topic._id || index; // ✅ use id if available, else index

          return (
            <Card className="mb-2" key={topicKey}>
              <Card.Header
                onClick={() =>
                  setOpenTopic(openTopic === topicKey ? null : topicKey)
                }
                style={{
                  backgroundColor: "#17a2b8",
                  color: "white",
                  cursor: "pointer",
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  {topic.name}{" "}
                  <Badge
                    bg={topic.status === "Done" ? "success" : "danger"}
                    pill
                  >
                    {topic.status}
                  </Badge>
                </div>
                <div>
                  {
                  openTopic === topicKey ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </Card.Header>

              <Collapse in={openTopic === topicKey}>
                <div>
                  {topic.subTopics?.length > 0 && (
                    <Card.Body>
                      <h5>Sub Topics</h5>
                      <Table bordered hover responsive>
                        <thead className="table-light">
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>LeetCode Link</th>
                            <th>YouTube Link</th>
                            <th>Article Link</th>
                            <th>Level</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topic.subTopics.map((sub, idx) => (
                            <tr key={idx}>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={sub.status === "Done"}
                                  onChange={() => handleSubtopicChange(topic._id, idx)}

                                />
                              </td>
                              <td>{sub.name}</td>
                              <td>
                                <a
                                  href={sub.leetcode}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Practise
                                </a>
                              </td>
                              <td>
                                <a
                                  href={sub.youtube}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Watch
                                </a>
                              </td>
                              <td>
                                <a
                                  href={sub.article}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Read
                                </a>
                              </td>
                              <td>{sub.level}</td>
                              <td>{sub.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  )}
                </div>
              </Collapse>
            </Card>
          );
        })}

      </div>
    </div>
  );
};

export default Topics;
