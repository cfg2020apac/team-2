import React, { Component } from "react";
import Setup from "./app/setup.js";
import firebase from "firebase";

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA5-zw5kI4pbFIuCpM5XizgwH1M1ay05fM",
      authDomain: "new-hope-cs.firebaseapp.com",
      databaseURL: "https://new-hope-cs.firebaseio.com",
      projectId: "new-hope-cs",
      storageBucket: "new-hope-cs.appspot.com",
      messagingSenderId: "1070221754790",
      appId: "1:1070221754790:web:f87ec29cc1cbeb7c6ecf67",
      measurementId: "G-CE03RMT7Q0"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return <Setup />;
  }
}
