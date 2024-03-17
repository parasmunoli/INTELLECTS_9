const express = require("express");
const app = express();
const database = require("./Config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./Config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

app.use(express.json());

// importing routes
const userRoutes = require("./Routes/user");
const jobRoutes = require("./Routes/jobs");

// defining routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/jobs", jobRoutes);

dotenv.config();
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*", // Allow requests from any origin
    credentials: true,
    methods: ['GET', 'POST'],
  })
);
app.options("*", cors()); // Respond to preflight requests with CORS headers
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

cloudinaryConnect();

const PORT = process.env.PORT || 8000;

// CORS preflight handling for all routes
app.options("*", cors()); // Respond to preflight requests with CORS headers


// Route to check service status
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Service is Up and Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});