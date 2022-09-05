const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()

const mongoose = require("mongoose");
const res = require("express/lib/response");

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);


const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Hello folks from alphaguy4!!!");
});

mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    app.listen(PORT, () => {
        console.log("Server started at Port no. " + PORT);
    });
}).catch((error) => {
    console.log(error)
})
