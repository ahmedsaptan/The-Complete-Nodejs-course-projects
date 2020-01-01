const express = require("express");

require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/tasks", taskRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is up in port: ", PORT);
});