const express = require("express");
const cors = require("cors");
require("./db/config");
const Personal_data = require("./db/Userdata");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/personal-details", async (req, res) => {
  let data = new Personal_data(req.body);
  let result = await data.save();
  // result = result.toObject();
  res.send(result);
});

app.get("/personal-details", async (req, res) => {
  const details = await Personal_data.find();
  if (details.length > 0) {
    res.send(details);
  } else {
    res.send({ result: "No data found" });
  }
});

app.get("/personal-details/:id", async (req, res) => {
  let result = await Personal_data.find({ name: { $regex: req.params.id } });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No data found" });
  }
});

app.listen(5000);
