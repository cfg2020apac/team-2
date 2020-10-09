import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet, 
  TextInput
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";


export default class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false
    };
  }

  render() {
    var clients = [
      {
        "id": "client_id_1",
        "name": "client_name_1", 
        "age": 10, 
        "income": 1000, 
        "found_job": true, 
        "cases": [
          "case_id_1",
        ], 
        "status": 1, 
      },
      {
        "id": "client_id_2",
        "name": "client_name_2", 
        "age": 20, 
        "income": 500, 
        "found_job": false, 
        "cases": [
          "case_id_2",
        ], 
        "status": 2, 
      },
    ]
    var clientCards = []
    for (const client of clients) {
      clientCards.push(
        <CardItem key={client.id}>
          {/* onPress={()=> {
            this.props.navigation.navigate('<Page Name>', {
              clientDetails: client,
            })
          }}> */}
          <Left style={{flex:0.3}}>
            <Thumbnail source={{ uri: 'https://img.tapimg.com/market/lcs/ba1c796fc180a9a2ea9a3105530f35ee_360.png?imageMogr2/auto-orient/strip' }} />
          </Left>
          <Body>
            <Text>Name: {client.name}</Text>
            <Text>Client id: {client.id}</Text>
            <Text>Status: {client.status}</Text>
          </Body>
        </CardItem>
      );
    }
    return (
      <SafeAreaView>
        <View>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Icon name="notifications"/>
          </Right>
        </Header>
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
        <Card>
          <CardItem>
            <Body>
              <TextInput
                placeholder="Search"
                style={styles.input}
                returnKeyType="go"
                ref={input => (this.passwordInput = input)}
              />
            </Body>
          </CardItem>
        </Card>
        <Card>
          {clientCards}
        </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    alignSelf: "center"
  }
});
