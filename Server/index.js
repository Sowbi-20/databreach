const express=require("express");
const cors = require("cors");
const auth=require("./routes/auth");
require("./connection/conn");

const app=express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey this data breach monitoring system!");
});
app.use("/api/v1",auth);
app.listen(1999, () => {
    console.log('Server is running on http://localhost:27017');
});