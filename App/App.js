import React, { Component } from "react";
import Setup from "./app/setup.js";
import firebase from "firebase";

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return <Setup />;
  }
}
