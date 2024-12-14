This is a full-stack Todo application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to create, view, update, and delete tasks efficiently with a user-friendly interface.

Features 🚀
Add Tasks: Add a title and description for new tasks.
Delete Tasks: Remove tasks you no longer need.
Expand Task Details: Click on the task to view its complete details.
Responsive UI: User-friendly interface using React and styled with CSS.
Full-Stack Integration: Backed by a robust API connected to MongoDB for persistent storage.
Real-Time Updates: Changes to the task list are reflected immediately.
Tech Stack 🛠️
Frontend:
React
CSS for styling
Axios (for API requests)
Backend:
Node.js
Express.js
MongoDB (database)
Mongoose (ODM for MongoDB)
Installation & Setup ⚙️
Follow these steps to set up the project locally.

Prerequisites:
Ensure you have the following installed:

Node.js
MongoDB (running locally or via a cloud service like MongoDB Atlas)
npm or yarn
Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
Backend Setup:
Navigate to the server folder:
bash
Copy code
cd server
Install backend dependencies:
bash
Copy code
npm install
Create a .env file to store your MongoDB URI:
env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:
bash
Copy code
npm start
Your backend will run on http://localhost:5000.
Frontend Setup:
Navigate to the client folder:
bash
Copy code
cd client
Install frontend dependencies:
bash
Copy code
npm install
Start the React development server:
bash
Copy code
npm run dev
Your frontend will run on http://localhost:5173.
