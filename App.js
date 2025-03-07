import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import MatchColorScreen from "./screens/MatchColorScreen";
import LuckyColorBoostScreen from "./screens/LuckyColorBoostScreen";
import DetailColorScreen from "./screens/Detail";
import SettingsScreen from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "MatchColor":
                iconName = "color-palette";
                break;
              case "LuckyColorBoost":
                iconName = "star";
                break;
              case "DetailColor":
                iconName = "eye";
                break;
              case "Settings":
                iconName = "settings";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MatchColor" component={MatchColorScreen} />
        <Tab.Screen name="LuckyColorBoost" component={LuckyColorBoostScreen} />
        <Tab.Screen name="DetailColor" component={DetailColorScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
