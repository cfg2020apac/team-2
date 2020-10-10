import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";
import { Divider } from "react-native-elements";
import WelcomeBanner from "../components/WelcomeBanner"
import firebase from 'firebase';

export default class RequestsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          requests: [],
          clients_data: [],
          key: '',
          isFetching: false
        };
    }

    componentDidMount() {
        firebase.database()
                .ref('application_request/')
                .on('value', snapshot => {
                    let data = snapshot.val() ? snapshot.val(): []
                    console.log(data);
                    var result = []
                    var index = 0;
                    for (var key in data) {
                        result[index] = data[key];
                        index += 1;
                    }
                    this.setState({
                        requests: result
                    });
                })
    }

    render() {
        var clientCards = []
        for (const client of this.state.requests) {
          clientCards.push(
              <TouchableOpacity onPress={() => {
                console.log("Does this happen?");
                this.props.navigation.navigate('DetailEvent', {
                    clientDetails: client
                });
              }}>
            <CardItem key={client.id}>
              <Left style={{flex:0.3}}>
                <Thumbnail source={{ uri: 'https://img.tapimg.com/market/lcs/ba1c796fc180a9a2ea9a3105530f35ee_360.png?imageMogr2/auto-orient/strip' }} />
              </Left>
              <Body>
                <Text>Client id: {client.clients}</Text>
                <Text>Status: {client.status}</Text>
              </Body>
            </CardItem>
            <Divider/>
            </TouchableOpacity>
          );
        }
        return (
          <ScrollView>
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
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    alignSelf: "center"
  }
});

