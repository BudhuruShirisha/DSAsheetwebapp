import React, { useEffect, useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../constants";

export default function TopicStats() {
  const [stats, setStats] = useState({ EASY: 0, MEDIUM: 0, HARD: 0 });
const API_URL = process.env.REACT_APP_API_URL;
 useEffect(() => {
  axios
    .get(`${CONSTANTS.API_BASE_URL}/api/topics/subtopicsdata`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => setStats(response.data))
    .catch((err) => console.error(err));
}, []);


 return (
  <div style={{ marginLeft: "200px" }}>
    <h2>Progress Reports</h2>
    <p>EASY: {stats.EASY} %</p>
    <p>MEDIUM: {stats.MEDIUM} %</p>
    <p>HARD: {stats.HARD} %</p>
  </div>
);

}