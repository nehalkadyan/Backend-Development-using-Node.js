const express = require("express");
const mongoose = require("mongoose");
const app = express();

// import router
const apiRouter = require("./routes/firstApi");
// auth route

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.route");

// connect to db

//  middleware to parse data to json

app.use(express.json()); // parse data coming from frontend into json format

mongoose
  .connect(
    "mongodb+srv://kadyannehal333_db_user:6mtmOA0TvR3kZ1Z9@cluster0.kehab7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to DB"));

//api endpoint
app.use("/api", apiRouter); // now we are using the api router in this

app.use("/api/auth", authRouter);

app.use("/allusers", userRouter);

// api testing route

// app.use("/",(req,res) => {
//     return res.send("<h1>Hello from our server</h1>")
// })

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// 6mtmOA0TvR3kZ1Z9
