import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet, 
  TextInput
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";
import { Divider } from "react-native-elements";


export default class WelcomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail source={{ uri: 'https://discourse.disneyheroesgame.com/uploads/default/original/3X/b/c/bcf55fc88779cd2a15eec21e62328b1c69049a7f.png' }} />
            </Left>
            <Body>
              <Text>
                Welcome!
              </Text>
              <Text>
                Casey Manger
              </Text>
              <Text>
                Case Manager
              </Text>
            </Body>
          </CardItem>
        </Card>
      </SafeAreaView>
    );
  }
}
