import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import Light from "./screens/Light";
import Ac from "./screens/Ac";
import Wifi from "./screens/Wifi";
import settings from "./settings";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Dashboard}
          initialParams={settings}
        />
        <Stack.Screen name="Light" component={Light} />
        <Stack.Screen name="Ac" component={Ac} />
        <Stack.Screen name="Wifi" component={Wifi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
