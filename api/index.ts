const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

const PORT = process.env.PORT || 0; // This will choose a random available port if PORT is not set
const server = app.listen(PORT, () => {
    console.log(`Server ready on port ${server.address().port}`);
});

module.exports = app;