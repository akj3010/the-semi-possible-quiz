const express = require("express");

const app = express();

app.use(express.static("./static"))

app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
})

app.listen(5432, () => {
    console.log("Server is listening on port 5432");
})