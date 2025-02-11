import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { Button, Input } from "@rneui/base";
import {
  saveLaptopRest,
  updateLaptopRest,
  deleteLaptopRest,
} from "../rest_client/laptops";

export const LaptopForm = ({ navigation, route }) => {
  let laptopRetrieve = route.params.itemParam;
  let isNew = true;
  if (laptopRetrieve != null) {
    isNew = false;
  }

  const [marca, setMarca] = useState(isNew ? null : laptopRetrieve.marca);
  const [procesador, setProcesador] = useState(
    isNew ? null : laptopRetrieve.procesador
  );
  const [memoria, setMemoria] = useState(isNew ? null : laptopRetrieve.memoria);
  const [disco, setDisco] = useState(isNew ? null : laptopRetrieve.disco);

  const showMessage = (message) => {
    Alert.alert("CONFIRMACIÓN", message);
    navigation.goBack();
  };
  const createLaptop = () => {
    saveLaptopRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage
    );
  };
  const updateLaptop = () => {
    console.log("actulizando laptop");
    const laptopData = {
      id: laptopRetrieve.id,
      marca: marca,
      procesador: procesador,
      memoria: memoria,
      disco: disco,
    };
    updateLaptopRest(laptopData, showMessage, route.params.fnRefreshList);
  };

  const confirmDeleteLaptop = () => {
    console.log("eliminando laptop");
    Alert.alert("CONFIRMACIÓN", "Está seguro que desea eliminar el laptop", [
      {
        text: "Cancelar",
      },
      {
        
        text: "Eliminar",
        
        onPress:()=>{
          console.log("Botón de eliminar presionado");
          deleteLaptop();
        }
        
      },
    ]);
  };
  const deleteLaptop = () => {
    deleteLaptopRest({ id: laptopRetrieve.id }, showMessage);
  };
  return (
    <View style={styles.container}>
      <Text>Formulario de Laptops</Text>

      <Input
        label="Marca"
        placeholder="Hp"
        value={marca}
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        label="Procesador"
        placeholder="intel i5"
        value={procesador}
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        label="memoria"
        placeholder="16GB"
        value={memoria}
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        label="disco"
        placeholder="1TB"
        value={disco}
        onChangeText={(value) => {
          setDisco(value);
        }}
      />
      <Button style={styles.button} title="Guardar" onPress={isNew ? createLaptop : updateLaptop} />
      {isNew ? (
        <View></View>
      ) : (
        <Button
          title="Eliminar"
          onPress={() => {
            confirmDeleteLaptop();
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});
