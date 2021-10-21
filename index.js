const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: "0",
    name: "Arif-uz-zaman",
    email: "arifuzzaman@gmail.com",
    phone: "01955882345",
  },
  {
    id: "1",
    name: "sumaiya-uz-zaman",
    email: "arifuzzaman@gmail.com",
    phone: "01955882345",
  },
  {
    id: "2",
    name: "neela-uz-zaman",
    email: "arifuzzaman@gmail.com",
    phone: "01955882345",
  },
  {
    id: "3",
    name: "iffty-uz-zaman",
    email: "arifuzzaman@gmail.com",
    phone: "01955882345",
  },
  {
    id: "4",
    name: "aysha-uz-zaman",
    email: "arifuzzaman@gmail.com",
    phone: "01955882345",
  },
];

app.get("/", (req, res) => {
  res.send("Hello world! Express is awesome");
});

app.get("/users", (req, res) => {
  const search = req.query.search;

  if (search) {
    const searchpera = users.filter(user =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchpera);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log(req.body);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
