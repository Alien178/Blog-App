import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

import HomeScreen from "./screens/HomeScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import PopularScreen from "./screens/PopularScreen";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen: RecommendationScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" },
      },
    },
  },
  PopularArticles: {
    screen: PopularScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" },
      },
    },
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    AppTopNavigation: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#fff",
        headerTitle: "Articles",
        headerStyle: {
          backgroundColor: "#00DDFA",
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: RFValue(18),
        },
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
