import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { laptopList } from "./screens/LaptopList";

export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen name="LaptopListNav" component={laptopList} />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
