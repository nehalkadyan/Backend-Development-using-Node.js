const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config()

// import router
const apiRouter = require("./routes/firstApi");
// auth route

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.route");

// connect to db

//  middleware to parse data to json
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err))


app.use(cors())
app.use(express.json()); // parse data coming from frontend into json format



//api endpoint
app.use("/api", apiRouter); // now we are using the api router in this

app.use("/api/auth", authRouter);

app.use("/allusers", userRouter);

// api testing route

// app.use("/",(req,res) => {
//     return res.send("<h1>Hello from our server</h1>")
// })

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});


