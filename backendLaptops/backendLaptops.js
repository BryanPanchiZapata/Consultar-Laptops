const express = require("express");
const backendLaptops = express();
const bodyParser = require("body-parser");
const port = 3001;

backendLaptops.use(bodyParser.json());

backendLaptops.use("/laptops", (req, res, next) => {
  console.log("headers: ", req.headers);
  console.log("body: ", res.body);
  next();
});

const laptops = [
  {
    id: 1,
    marca: "HP",
    procesador: "Intel Core i5",
    memoria: "8GB",
    disco: "1TB",
  },
  {
    id: 2,
    marca: "deLL",
    procesador: "Intel Core i5",
    memoria: "8GB",
    disco: "1TB",
  },
  {
    id: 3,
    marca: "asus",
    procesador: "Intel Core i5",
    memoria: "8GB",
    disco: "1TB",
  },
];

backendLaptops.get("/laptops/:id", (req, res) => {
  const laptop = laptops.find(
    (laptop) => laptop.id === parseInt(req.params.id)
  );

  const { id, ...laptopWithoutId } = laptop;
  res.send(laptopWithoutId);
});

backendLaptops.get("/laptops", (req, res) => {
  res.send(laptops);
});

backendLaptops.post("/laptops", (req, res) => {
  req.body.id = laptops.length + 1;
  laptops.push(req.body);
  res.send(req.body);
});

backendLaptops.put("/laptops/:idParam", (req, res) => {
  const id = req.params.idParam;
  console.log("id: ", id);
  res.send(req.body);
});

backendLaptops.delete("/laptops/:id", (req, res) => {
  const id = req.params.id;
  console.log("idDelete: ", id);
  res.send({id:id});
});

backendLaptops.listen(port, () => {
  console.log("Servidor iniciado en el puerto 3001");
});
