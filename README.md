# Curd-2 Frontend (Vite + React)

This is a minimal React frontend built with Vite. It's designed to work with the server running at `http://localhost:8000`.

Quick start:

1. cd into the client folder:

   ```powershell
   cd 'd:\curd 2\client'
   npm install
   npm run dev
   ```

2. Open http://localhost:5173 in your browser.

Notes:
- The frontend fetches and posts users to `http://localhost:8000/api/user` and `http://localhost:8000/api/user/create`.
- If you run the frontend on a different origin, enable CORS on the backend (install and use the `cors` package in your server).

Suggested backend CORS addition:

```js
// in index.js
import cors from 'cors'
app.use(cors())
```

If you want, I can add the CORS change to your backend and update the root `package.json` to include `cors`.
