const express = require("express");
const rpcMethods = require("./routes/api");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", rpcMethods);

const port = process.env.PORT || 4444;

server = app.listen(port, () => console.log(`Server running on port ${port}`));