import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

import authRoutes from '../backend/routes/auth.routes.js';
import userRoutes from '../backend/routes/user.routes.js';
import postRoutes from '../backend/routes/post.routes.js';

import connectDb from './db/connectDb.js';

const app = express();

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
    connectDb();
    console.log("Server Started at http://localhost:",PORT)
})

//RqBS6v987doqCMUp