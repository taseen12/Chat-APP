import path from "path";
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connecToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express();


dotenv.config()
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=> {
    connectToMongoDB()
    console.log(`Server is running to the port ${PORT}`)});


// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connecToMongoDB.js";
// import { app, server } from "./socket/socket.js"; 
// dotenv.config();


// app.use(express.json());
// app.use(cookieParser());


// app.use(cors({
//     origin: "http://localhost:5173",      methods: ["GET", "POST", "PUT", "DELETE"],  
//     credentials: true  
// }));


// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     connectToMongoDB();
//     console.log(`Server is running on port ${PORT}`);
// });
