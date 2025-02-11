const ip = "192.168.1.7";
const port = 3001;
const url = "http://" + ip + ":" + port + "/";
export const getAllLaptops = (fnRefreshList) => {
  fetch(url + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};
export const saveLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      marca: laptop.marca,
      procesador: laptop.procesador,
      memoria: laptop.memoria,
      disco: laptop.disco,
    }),
  };
  fetch(url + "laptops", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage("Se ha creado la laptop");
      console.log(body);
    });
};

export const updateLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(laptop),
  };

  fetch(url + "laptops/" + laptop.id, config)
    .then((response) => response.json())
    .then((body) => {
      console.log("Laptop actualizada:", body);
      fnShowMessage("Se ha actualizado la laptop");
    });
};

export const deleteLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "DELETE",
  };
  fetch(url + "laptops/" + laptop.id, config)
    .then((response) => response.json())
    .then((body) => {
      console.log("Respuesta del servidor:", body);
      fnShowMessage("Se ha eliminado la laptop");
      console.log(body);
    });
};
