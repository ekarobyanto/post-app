import { NavigationContainer } from "@react-navigation/native";
import {Text, View } from "react-native";
import AppStackNavigator from "./stack-navigator/app-stack-navigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

