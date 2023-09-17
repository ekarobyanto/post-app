import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types/param-list";

import PostStackNavigator from "./stack-navigator/post-stack-navigator";
import ProfileStackNavigator from "./stack-navigator/profile-stack-navigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import { Text } from "react-native";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  const theme = useTheme();
  let screens = [
    {
      name: "Post",
      component: PostStackNavigator,
      icon: "list",
    },
    {
      name: "Profile",
      component: ProfileStackNavigator,
      icon: "person",
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "grey",
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      {screens.map((screen) => (
        <Tab.Screen
          name={screen.name}
          key={screens.indexOf(screen)}
          component={screen.component}
          options={{
            tabBarLabel(props) {
              return (
                <Text
                  className={
                    props.focused
                      ? "font-bold text-violet-950 text-sm"
                      : "font-light text-gray text-xs"
                  }
                >
                  {screen.name}
                </Text>
              );
            },
            tabBarIcon: ({ color }) => (
              <Ionicons name={screen.icon} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
