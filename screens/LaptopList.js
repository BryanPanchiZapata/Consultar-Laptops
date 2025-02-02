import { View, StyleSheet, Text, FlatList } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";
import { useState } from "react";

export const laptopList = ({navigation}) => {
  fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };
  const LaptopItem = ({ item }) => {
    console.log(item);
    return (
      <ListItem>
        <ListItem.Title>{item.marca}</ListItem.Title>
        <ListItem.Subtitle>{item.procesador}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.memoria}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.disco}</ListItem.Subtitle>
      </ListItem>
    );
  };
  const [contactsList, setLaptopsList] = useState();

  return (
    <View style={styles.container}>
      <Text>Lista de Laptops</Text>
      <Button
        title="consultar"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      ></Button>
      <FlatList
        data={contactsList}
        renderItem={({ item }) => {
          return <LaptopItem item={item} />;
        }}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopFormNav");
        }}
      />
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
