const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static images from the "public" folder
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "/assets/image.png" },
  { id: 2, name: "Phone", price: 500, image: "/assets/4075428-2-4-5b84249446e0fb005082e7fa.jpg" },
  { id: 3, name: "Tablet", price: 300, image: "/assets/tab.jfif" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

const users = [];

app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users[index] = req.body;
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
