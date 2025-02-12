const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "192.168.1.7",
  database: "contactos",
  password: "postgres",
  port: 5433,
});

app.use(bodyParser.json());

app.use("/contactos", (request, response, next) => {
  console.log("headers: ", request.headers);
  console.log("body: ", request.body);
  next();
});

app.get("/contactos", async (req, res) => {
  const client = new Client({
    user: "postgres",
    host: "192.168.1.7",
    database: "contactos",
    password: "postgres",
    port: 5433,
  });
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM contactos");
    console.log("Consulta ejecutada:", result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(" Error en la consulta:", err);
  } finally {
    await client.end();
  }
});

app.post("/contactos", async (request, response) => {
  const { nombre, apellido, telefono, email } = request.body;
  try {
    await client.connect();
    const result = await client.query(
      "insert into contactos(nombre, apellido, telefono, email) values($1, $2, $3, $4) RETURNING *",
      [nombre, apellido, telefono, email]
    );
    console.log("Insertar Contacto:", result.rows);
    response.send(result.rows);
  } catch (err) {
    console.error(" Error en la consulta:", err);
  } finally {
    await client.end();
  }
});

app.put("/contactos/:idParam", async (request, response) => {
  const client = new Client({
    user: "postgres",
    host: "192.168.1.7",
    database: "contactos",
    password: "postgres",
    port: 5433,
  });
  const id = request.params.idParam;
  console.log("id: ", id);
  const { nombre, apellido, telefono, email } = request.body;
  try {
    await client.connect();
    const result = await client.query(
      "update contactos set nombre = $1, apellido = $2, telefono = $3, email = $4 where id = $5 RETURNING *",
      [nombre, apellido, telefono, email, id]
    );
    console.log("Actualizar Contacto:", result.rows);
    response.send(result.rows);
  } catch (err) {
    console.error(" Error en la consulta:", err);
  } finally {
    await client.end();
  }
});

app.delete("/contactos/:id", async (request, response) => {
  const client = new Client({
    user: "postgres",
    host: "192.168.1.7",
    database: "contactos",
    password: "postgres",
    port: 5433,
  });
  const id = request.params.id;
  console.log("idDelete: ", id);
  try {
    await client.connect();
    const result = await client.query("delete from contactos where id = $1 ", [
      id,
    ]);
    console.log("Eliminar Contacto:", result.rows);
    response.send(result.rows);
  } catch (err) {
    console.error(" Error en la consulta:", err);
  } finally {
    await client.end();
  }
  response.send({ id: id });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
