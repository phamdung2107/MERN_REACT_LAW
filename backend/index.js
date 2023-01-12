const app = require('./app');
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary");

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@law.pwqwomt.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});
