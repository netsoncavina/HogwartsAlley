import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import HouseSelection from "../pages/HouseSelection/HouseSelection";
import HouseStudents from "../pages/HouseStudents/HouseStudents";
import StudentPage from "../pages/StudentPage/StudentPage";

export type RootStackParamList = {
  Home: undefined;
  HouseSelection: undefined;
  HouseStudents: { houseName: string };
  StudentPage: { id: string };
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
      <Stack.Screen
        name="HouseStudents"
        component={HouseStudents as any}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentPage"
        component={StudentPage as any}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
