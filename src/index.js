const app = require("express")();
const cors = require("cors");
const { json } = require("express");

app.use(json());
app.use(cors());

app.use("/tracking", require("./routes/trackingRoutes"));

app.listen(3001, function () {
  console.log("Live on port 3001");
});
