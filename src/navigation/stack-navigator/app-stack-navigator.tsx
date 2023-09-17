import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/param-list";
import BottomTabNavigator from "@/navigation/bottom-tab-navigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
