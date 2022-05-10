const express = require("express");
const { where } = require("sequelize");
const app = express();

const sequelize = require("../models").sequelize;
sequelize.sync();
// sequelize.app.use(express.json());

const Models = require("../models");

async function FindAction() {
  let find = await Models.Board.findAll({ raw: true });
  find.forEach((element) => {
    console.log(element);
  });
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

// DeleteTodos();
FindAction();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
