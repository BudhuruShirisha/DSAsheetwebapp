import mongoose from "mongoose";
import dotenv from "dotenv";
import Topic from "../models/Topic.js";
import User from "../models/User.js";

dotenv.config();

const defaultTopics = [
    {name: "Algorithms",
      subTopics: [
        {
          name: "Sorting Algorithms",
          leetcode: "https://leetcode.com/tag/sorting/",
          youtube: "https://youtube.com/results?search_query=sorting+algorithms",
          article: "https://www.geeksforgeeks.org/sorting-algorithms/",
          level: "EASY",
          status: "Pending",
        },
        {
          name: "Binary Search",
          leetcode: "https://leetcode.com/problems/binary-search/",
          youtube: "https://youtube.com/results?search_query=binary+search",
          article: "https://www.geeksforgeeks.org/binary-search/",
          level: "EASY",
          status: "Pending",
        },
        {
          name: "Dynamic Programming Basics",
          leetcode: "https://leetcode.com/tag/dynamic-programming/",
          youtube: "https://youtube.com/results?search_query=dynamic+programming",
          article: "https://www.geeksforgeeks.org/dynamic-programming/",
          level: "MEDIUM",
          status: "Pending",
        }]},
  {
    name: "Data Structures",
    subTopics: [
      {
        name: "Arrays",
        leetcode: "https://leetcode.com/tag/array/",
        youtube: "https://youtube.com/results?search_query=arrays+data+structures",
        article: "https://www.geeksforgeeks.org/array-data-structure/",
        level: "EASY",
        status: "Pending",
      },
      {
        name: "Linked Lists",
        leetcode: "https://leetcode.com/tag/linked-list/",
        youtube: "https://youtube.com/results?search_query=linked+list",
        article: "https://www.geeksforgeeks.org/linked-list-data-structure/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Databases",
    subTopics: [
      {
        name: "SQL Basics",
        leetcode: "https://leetcode.com/tag/sql/",
        youtube: "https://youtube.com/results?search_query=sql+basics",
        article: "https://www.geeksforgeeks.org/sql-tutorial/",
        level: "EASY",
        status: "Pending",
      },
      {
        name: "NoSQL Databases",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=nosql+databases",
        article: "https://www.geeksforgeeks.org/introduction-to-nosql/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Machine Learning",
    subTopics: [
      {
        name: "Supervised Learning",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=supervised+learning",
        article: "https://www.geeksforgeeks.org/supervised-learning/",
        level: "MEDIUM",
        status: "Pending",
      },
      {
        name: "Unsupervised Learning",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=unsupervised+learning",
        article: "https://www.geeksforgeeks.org/unsupervised-learning/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Operating Systems",
    subTopics: [
      {
        name: "Processes and Threads",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=processes+and+threads+os",
        article: "https://www.geeksforgeeks.org/processes-in-operating-system/",
        level: "MEDIUM",
        status: "Pending",
      },
      {
        name: "Memory Management",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=memory+management+os",
        article: "https://www.geeksforgeeks.org/memory-management-in-operating-system/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Networks",
    subTopics: [
      {
        name: "OSI Model",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=osi+model",
        article: "https://www.geeksforgeeks.org/layers-of-osi-model/",
        level: "EASY",
        status: "Pending",
      },
      {
        name: "TCP/IP",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=tcp+ip+protocol",
        article: "https://www.geeksforgeeks.org/introduction-of-tcp-ip-model/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Mathematics",
    subTopics: [
      {
        name: "Linear Algebra",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=linear+algebra",
        article: "https://www.geeksforgeeks.org/linear-algebra-basics/",
        level: "MEDIUM",
        status: "Pending",
      },
      {
        name: "Probability and Statistics",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=probability+and+statistics",
        article: "https://www.geeksforgeeks.org/probability-and-statistics-basics/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Software Engineering",
    subTopics: [
      {
        name: "Software Development Life Cycle",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=software+development+life+cycle",
        article: "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/",
        level: "EASY",
        status: "Pending",
      },
      {
        name: "Design Patterns",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=design+patterns",
        article: "https://www.geeksforgeeks.org/software-design-patterns/",
        level: "MEDIUM",
        status: "Pending",
      },
    ],
  },
  {
    name: "Web Development",
    subTopics: [
      {
        name: "HTML & CSS",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=html+css+tutorial",
        article: "https://www.geeksforgeeks.org/html-css-tutorials/",
        level: "HARD",
        status: "Pending",
      },
      {
        name: "JavaScript Basics",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=javascript+basics",
        article: "https://www.geeksforgeeks.org/javascript-tutorial/",
        level: "EASY",
        status: "Pending",
      },
    ],
  },
  {
    name: "Cloud Computing",
    subTopics: [
      {
        name: "AWS Basics",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=aws+cloud+computing",
        article: "https://www.geeksforgeeks.org/introduction-to-cloud-computing/",
        level: "EASY",
        status: "Pending",
      },
      {
        name: "Azure Basics",
        leetcode: "",
        youtube: "https://youtube.com/results?search_query=azure+cloud+computing",
        article: "https://www.geeksforgeeks.org/introduction-to-microsoft-azure/",
        level: "HARD",
        status: "Pending",
      },
    ],
  },
];

export async function seedTopicsForUser(userId) {
  try {
    const existing = await Topic.findOne({ userId: userId });
    if (existing) return;

    for (const t of defaultTopics) {
      await Topic.create({ ...t, userId: userId });
    }
  } catch (e) {
    console.error("seed error", e.message);
  }
}


