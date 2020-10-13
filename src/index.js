const app = require("express")();
const cors = require("cors");
const { json } = require("express");

app.use(json());
app.use(cors());

app.use("/tracking", require("./routes/trackingRoutes"));

var port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log("Live on port 3001");
});
