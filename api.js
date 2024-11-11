// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js'; // Adjust path as necessary
// import userRoute from './route/userRoute.js'; // Adjust path as necessary
// import cors from 'cors';
// import bcrypt from 'bcryptjs';
// import { userModel } from './models/userModels.js';  // Adjust path as necessary

// dotenv.config();

// const app = express();

// // Enable CORS
// app.use(cors({
//     origin: 'http://localhost:3000',  // Frontend origin (e.g., React running on localhost:3000)
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,  // Allow credentials (cookies, authorization headers)
// }));

// // Middleware to parse incoming requests
// app.use(express.json());

// // Routes
// app.use("/apps/auth", userRoute);

// // Function to create a user document in the database
// const createUserDocument = async () => {
//   const email = "imaosa@gmail123.com";
//   const password = "12345678";

//   try {
//     // Check if user already exists to avoid duplication
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       console.log("User already exists.");
//       return;
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save a new user document
//     const user = new userModel({ email, password: hashedPassword });
//     await user.save();
//     console.log("User document created successfully:", user);
//   } catch (error) {
//     console.error("Error creating user document:", error);
//   }
// };

// // Call the createUserDocument function once, on server startup
// createUserDocument();

// const PORT = process.env.PORT_URL || 5050;

// // Connect to MongoDB and start the server
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running on Port:${PORT}`);
//     });
// });


import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; // Adjust path as necessary
import userRoute from './route/userRoute.js'; // Adjust path as necessary
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { userModel } from './models/userModels.js';  // Adjust path as necessary

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000',  // Frontend origin (e.g., React running on localhost:3000)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  // Allow credentials (cookies, authorization headers)
}));

// Middleware to parse incoming requests
app.use(express.json());

// Routes
app.use("/apps/auth", userRoute);

// Function to create a user document in the database
const createUserDocument = async () => {
  const email = "imaosazee12@gmail.com";
  const password = "12345678";

  try {
    // Check if user already exists to avoid duplication
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("User already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save a new user document
    const user = new userModel({ email, password: hashedPassword });
    await user.save();
    console.log("User document created successfully:", user);
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};

// Call the createUserDocument function once, on server startup
createUserDocument();

const PORT = process.env.PORT_URL || 5050;

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on Port:${PORT}`);
    });
});
