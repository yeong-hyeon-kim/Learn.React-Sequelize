const { Board } = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("../models").sequelize;
const Models = require("../models");
const cors = require("cors");
const app = express();

// Sequelize Sync
sequelize.sync();
app.use(cors());

// Apply bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Console Test
async function FindAction() {
  let find = await Models.Board.findAll({ raw: true });
  find.forEach((element) => {
    console.log(element);
  });

  return find;
}

async function InsertAction() {
  let insert = await Models.Board.create({
    id: "",
    date: "",
    title: "New Test Title!",
  });
}

async function UpdateAction() {
  let update = await Models.Board.update(
    { Title: "Update Title!" },
    { where: { id: "1" } }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function DeleteAction() {
  let deletes = await Models.Board.destroy({ where: { id: 1 } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// API Get
app.get("/get/data", (req, res) => {
  Board.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      throw err;
    });
});

// REST API
// POST
app.post("/add/data", (req, res) => {
  console.log(req.body);

  let reqData = req.body;

  console.log(reqData);
  console.log({
    title: reqData["title"],
    contents: reqData["contents"],
    date: reqData["date"],
  });

  Models.Board.create({
    title: reqData["title"],
    contents: reqData["contents"],
    date: reqData["date"],
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Put
app.put("/update/data", (req, res) => {
  console.log(req.body);

  let reqData = req.body;

  Models.Board.update(req.body, { where: reqData["id"], truncate: true })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE
app.delete("/delete/data", (req, res) => {
  console.log(req.body);

  let reqData = req.body;

  Models.Board.destroy({ where: { id: Number(reqData["id"]) } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Server On
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
