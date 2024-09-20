// import express from "express"
// import dotenv from "dotenv"
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/auth.routes.js"
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connecToMongoDB.js";
// import { app, server } from "./socket/socket.js";

// // const app = express();


// dotenv.config()
// app.use(express.json());
// app.use(cookieParser());
// const PORT = process.env.PORT || 5000;
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);


// server.listen(PORT,()=> {
//     connectToMongoDB()
//     console.log(`Server is running to the port ${PORT}`)});

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors package

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connecToMongoDB.js";
import { app, server } from "./socket/socket.js"; // Assuming socket.js exports 'app' and 'server'

// Load environment variables
dotenv.config();

// Use JSON parser and cookie parser middleware
app.use(express.json());
app.use(cookieParser());

// Enable CORS for specific origins or all origins
app.use(cors({
    origin: "http://localhost:5173",  // Allow requests only from this origin (your frontend)
    methods: ["GET", "POST", "PUT", "DELETE"],  // Allow specific HTTP methods
    credentials: true  // If you want to allow cookies or authentication credentials
}));

// Define your routes
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Start the server and connect to MongoDB
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
