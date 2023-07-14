import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import HouseSelection from "../pages/HouseSelection/HouseSelection";

export type RootStackParamList = {
  Home: undefined;
  HouseSelection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HouseSelection"
        component={HouseSelection}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
