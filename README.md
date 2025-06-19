### Documentation for Setting Up, Running, and Deploying the Project

This guide will walk you through the steps to set up, run, and deploy the project on **Render**. The project is a simple Todo application built with **Express.js** and **MongoDB**.

---

### **1. Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (or a MongoDB Atlas connection string)
- **Render** account (for deployment)

---

### **2. Project Structure**
The project is organized as follows:
```
src/
├── controllers/        # Contains business logic for handling requests
│   ├── auth.controller.ts
│   └── task.controller.ts
├── models/             # Defines the database models
│   ├── task.model.ts
│   └── user.model.ts
├── routes/             # Defines the API routes
│   ├── auth.routes.ts
│   └── task.routes.ts
├── utils/              # Utility functions
│   └── jwt.ts
├── middleware/         # Middleware for authentication and other tasks
│   └── auth.middleware.ts
├── config/             # Configuration files (e.g., database connection)
│   └── db.ts
├── app.ts              # Main application setup
└── server.ts           # Server entry point
```

---

### **3. Setting Up the Project**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jordan-ae/to-do-list-BE.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

   - Replace `<your-mongodb-connection-string>` with your MongoDB connection string (e.g., from MongoDB Atlas).
   - Replace `<your-jwt-secret-key>` with a secure secret key for JWT token generation.

---

### **4. Running the Project Locally**
1. **Start the Server**:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`.

2. **Test the API**:
   Use tools like **Postman** or **cURL** to test the API endpoints:
   - **Auth Routes**:
     - `POST /auth/register` - Register a new user.
     - `POST /auth/login` - Log in and get a JWT token.
   - **Task Routes**:
     - `GET /tasks` - Get all tasks.
     - `POST /tasks` - Create a new task.
     - `PUT /tasks/:id` - Update a task.
     - `DELETE /tasks/:id` - Delete a task.

---

### **5. Deploying to Render**
1. **Push the Code to a Git Repository**:
   Ensure your code is pushed to a Git repository (e.g., GitHub, GitLab).

2. **Create a New Web Service on Render**:
   - Go to the Render dashboard and click **New Web Service**.
   - Connect your Git repository.
   - Configure the following settings:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Environment Variables**:
       - `PORT`: `5000`
       - `MONGO_URI`: `<your-mongodb-connection-string>`
       - `JWT_SECRET`: `<your-jwt-secret-key>`

3. **Deploy the Service**:
   Click **Create Web Service** to deploy the application. Render will automatically build and deploy your app.

---

### **6. Post-Deployment**
- **Access the API**:
  Once deployed, you can access the API at the URL provided by Render (e.g., `https://<your-service-name>.onrender.com`).

- **Monitor Logs**:
  Use the Render dashboard to monitor logs and troubleshoot any issues.

---

### **7. Additional Notes**
- **Database**: Ensure your MongoDB instance is accessible from Render. If using MongoDB Atlas, whitelist Render's IP addresses.
- **Environment Variables**: Keep sensitive information (e.g., `JWT_SECRET`, `MONGO_URI`) secure and avoid hardcoding them in the codebase.

---

This documentation should help you set up, run, and deploy the project successfully. Let me know if you need further assistance!

[➡️ Frontend Repo (Angular)](https://github.com/jordan-ae/todo-fe)
