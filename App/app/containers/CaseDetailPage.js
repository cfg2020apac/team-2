import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet, 
  TextInput
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";
import { Divider } from "react-native-elements";
import WelcomeBanner from "../components/WelcomeBanner"


export default class CaseDetailPage extends Component {
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
        "case_id": "case_id_1",
        "client_id": "client_id_1", 
        "timestamp": new Date().toString(), 
        "title": "case_title_1",
        "description": "this can be a very very very long description",
        "manager_id": "manager_id_1", 
        "social_worker_id": "social_worker_id_1", 
      },
      {
        "case_id": "case_id_2",
        "client_id": "client_id_2", 
        "timestamp": new Date().toString(), 
        "title": "case_title_2",
        "description": "this can be a very very very long description",
        "manager_id": "manager_id_2", 
        "social_worker_id": "social_worker_id_2", 
      },
    ]
    var clientCards = []
    for (const client of clients) {
      clientCards.push(
          <View>
        <CardItem key={client.id}>
          {/* onPress={()=> {
            this.props.navigation.navigate('<Page Name>', {
              clientDetails: client,
            })
          }}> */}
          <Body>
            <Text>Case id: {client.case_id}</Text>
            <Text>Title: {client.title}</Text>
            <Text>Date: {client.timestamp}</Text>
          </Body>
        </CardItem>
        <Divider/>
        </View>
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
        <WelcomeBanner/>
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
