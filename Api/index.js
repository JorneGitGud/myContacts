const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//my models and utils
const routes = require("./controllers");
const { HttpError } = require("./utils/utils");

// monodb   Jorne : OISJorneConnect
mongoose.connect(
  "mongodb+srv://Jorne:OISJorneConnect@mycluster.kndtx.mongodb.net/myDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to MongoDB");
  }
);

//parser middelware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//requests
app.use(routes);

//error middelware
app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      error: true,
      message: err.errMessage,
    });
  } else {
    {
      res.status(500).json({
        error: true,
        message: "Server error",
      });
    }
  }
});

//port:
app.listen(5000, () => {
  console.log("started listening on port 5000");
});
