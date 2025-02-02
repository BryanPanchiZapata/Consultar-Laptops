import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { laptopList } from "./screens/LaptopList";
import {LaptopForm} from "./screens/LaptopsForm";

export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="LaptopListNav">
        <StackLaptops.Screen name="LaptopListNav" component={laptopList} />
        <StackLaptops.Screen name="LaptopFormNav" component={LaptopForm} />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
