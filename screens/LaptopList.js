import { View, StyleSheet, Text, FlatList, TouchableHighlight } from "react-native";
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
      <TouchableHighlight
      onPress={()=>{
        navigation.navigate("LaptopFormNav", {itemParam: item,
          fnRefreshList: fnRefreshList
        });
      }}
      >
      <ListItem>
        <ListItem.Title>{item.marca}</ListItem.Title>
        <ListItem.Subtitle>{item.procesador}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.memoria}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.disco}</ListItem.Subtitle>
      </ListItem>
      </TouchableHighlight>
    );
  };
  const [laptopsList, setLaptopsList] = useState([]);

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
        data={laptopsList}
        renderItem={({ item }) => {
          return <LaptopItem item={item} />;
        }}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopFormNav", {fnRefreshList: fnRefreshList});
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
