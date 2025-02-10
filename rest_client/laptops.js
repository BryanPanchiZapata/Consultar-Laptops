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
      fnShowMessage();
      console.log(body);
    });
};

export const updateLaptopRest = (laptop, fnShowMessage, fnRefreshList) => {
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
      fnShowMessage();
      fnRefreshList(); // Asegurar que se refresca la lista en pantalla
    })
    .catch((error) => {
      console.error("Error al actualizar la laptop:", error);
    });
};
