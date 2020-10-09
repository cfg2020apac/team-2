import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../containers/HomeScreen";
import FacilitiesScreen from "../containers/FacilitiesScreen";
import FAQScreen from "../containers/FAQScreen";
import SettingsScreen from "../containers/SettingsScreen";
import MenuDrawer from "../components/MenuDrawer";
import DefaultPage from "../containers/DefaultPage";
import MatchingPage from "../containers/MatchingPage";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.65,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
  navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: DefaultPage,
      navigationOptions: {
          title: 'Home',
          header: null //this will hide the header
      },
    },
    Matches: {
        screen: MatchingPage,
        navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
        }
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
