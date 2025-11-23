A simple React + Vite frontend application connected to a Node.js backend for CRUD operations.

git clone https://github.com/YOUR-USERNAME/curd-app.git
cd "management-web/client"
npm install
npm run dev


App will run at: http://localhost:5173



Backend API (Connected To)

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/user`        | Fetch all users   |
| POST   | `/api/user/create` | Create a new user |



Enable CORS (If Needed)

In your backend (server.js / index.js):

import cors from "cors";
app.use(cors());

Project Structure

client/
 ├─ src/
 │   ├─ components/
 │   ├─ pages/
 │   ├─ App.jsx
 │   └─ main.jsx
 ├─ public/
 ├─ package.json
 └─ vite.config.js


Build for Production
npm run build

