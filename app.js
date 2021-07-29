const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

//  Connect DB
const db = require("./config/database");
const routes = require("./routes");

//  TEst DB
db.authenticate()
  .then(() => console.log("database connected..."))
  .catch((err) => console.log("DB connected error: ", err));

const app = express();
app.use(cors());

app.use(
  bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.send("Server is running..."));

// Routes



app.use("/v1", routes);


// catch 404 and forward to error handler
app.use((req, res, next) => { console.log(req);
  const err = new Error(`Route Not Found :  ${req.path}`);
  err.status = 404;
  next(err);
});

const PORT = process.env.PORT || 7192;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
