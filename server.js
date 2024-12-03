const express = require("express");
const app = express();
const PORT = 3000;

const postRouter = require("./routers/app");

app.get("/", (req, res) => {
    res.send("<h1> Server del mio blog </h1>");
});

app.use("/posts", postRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});