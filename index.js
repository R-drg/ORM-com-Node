const express = require("express");
const app = express();
const { User } = require("./app/models");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", async (req, res, next) => {
  const users = await User.findAll().catch((err) => next(err));
  res.json(users);
});
app.post("/users", async (req, res, next) => {
  const user = await User.create(req.body).catch((err) => next(err));
  res.status(201).json(user);
  console.log(req.body);
});

app.get("/users/:id", async (req, res, next) => {
  const user = await User.findOne({
    where: { id: req.params.id },
  }).catch((err) => next(err));
  if (!user) {
    res.status(404).send({ message: "Not Found" });
  }
  res.json(user)
}); //Buscar
app.put("/users/:id", async (req, res, next) => {
  const user = await User.findOne({
    where: { id: req.params.id },
  }).catch((err) => next(err));
  if (!user) {
    res.status(404).send({ message: "Not Found" });
  }
  user.update(req.body).catch((err) => next(err));
  res.status(200).json(user);
}); //Editar
app.delete("/users/:id", async (req, res) => {
  const user = await User.findOne({
    where: { id: req.params.id },
  }).catch((err) => next(err));
  if (!user) {
    res.status(404).send({ message: "Not Found" });
  }
  user.update(req.body).catch((err) => next(err));
  res.status(200).send({message: `User with id ${req.params.id} has been deleted`});
}); //Deletar

app.use(function (error, req, res, next) {
  res.status(500).send({ message: "Internal Server Error" });
  console.error(error.stack);
});

app.listen(3000, () => {
  console.log(`Listening on port:${PORT}`);
});
