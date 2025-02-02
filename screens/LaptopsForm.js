import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { Button, Input } from "@rneui/base";
import { saveLaptopRest } from "../rest_client/laptops";

export const LaptopForm = ({navigation}) => {
  const [marca, setMarca] = useState();
  const [procesador, setProcesador] = useState();
  const [memoria, setMemoria] = useState();
  const [disco, setDisco] = useState();

  const showMessage = () => {
    Alert.alert("CONFIRMACIÓN", "Laptop guardada");
  };
  const saveLaptop = () => {
    console.log(saveLaptop);
    navigation.goBack();
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
      <Button title="Guardar" onPress={saveLaptop} />
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
});
