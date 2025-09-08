This project is a full-stack application built with React (frontend), Node.js/Express (backend), and MongoDB (database). It demonstrates a complete setup for a MERN stack application.
root/
│
├── frontend/      # React frontend
│   └── package.json
│
├── backend/       # Node.js backend
│   └── package.json
│
└── README.md

Clone the repository
git clone "https://github.com/BudhuruShirisha/DSAsheetwebapp.git"

cd DSAsheetwebapp

Install dependencies

cd frontend
npm install

cd ../backend
npm install


MongoDB Database
Create a database (local or Atlas).
Copy your connection string.
Create a .env file in backend/:

MONGO_URI=your_mongo_connection_string   (search in .env file)
PORT=5000



Running the Application
cd frontend
npm run dev
The React app will run on http://localhost:5173


cd backend
npm start
The backend server will run on http://localhost:5000
