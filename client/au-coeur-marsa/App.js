import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigatoin/BottomTabNavigator";
import StackNavigation from "./navigatoin/AppNavigationStack";
import { Provider as PaperProvider } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigatoin/BottomTabNavigator";
import ListScreen from "./screens/ListScreen";
import FeedScreen from "./screens/FeedScreen";
import { useRoute } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      {/* <Navigator /> */}
      {/* <StackNavigation/> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerMode: "none", headerShown: false }}
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen
            options={{ headerMode: "screen", headerShown: true }}
            name="List"
            component={ListScreen}
          />
          <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
