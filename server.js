const express = require("express");
const app = express();
const mongodb = require("./db/connect.js");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongodb.initDb((error, mongodb) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, host);
    console.log(
      `Database is connected. App is listening at: http://${host}:${port}`
    );
  }
});
