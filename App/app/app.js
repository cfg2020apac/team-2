import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from "react-native";
// import AdminHomePage from "./containers/AdminHomePage";
// import DefaultPage from "./containers/DefaultPage";
// import CaseDetailPage from "./containers/CaseDetailPage";
import MatchingPage from "./containers/MatchingPage";

import DrawerNavigator from "./managers/DrawerNavigator";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
// import Login from "./components/Login";
import CreateEvent from "./containers/CreateEvent";
import ViewEvent from "./containers/SignedUpEventsPage";

const root = createSwitchNavigator({
  // Login: {
  //   screen: Login
  // },
  Admin: {
    screen: MatchingPage
  },
  CreateEvent: {
    screen: CreateEvent
  },
  ViewEvent: {
    screen: ViewEvent
  },
  default: DrawerNavigator
});

// const AuthStack = createStackNavigator({ LoginPage: Login });

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    this.props.navigation.navigate(isLoggedIn !== "1" ? "Auth" : "Auth");
  };
}

const Test = createAppContainer(root);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Test />
      </View>
    );
  }
}

const Application = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      // Auth: AuthStack
    },
    {
      initialRouteName: "App"
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003D7C"
  }
});

module.export = App;
