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


export default class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      clients_data: [],
      key: '',
      isFetching: false
    };
  }

  async getCMID(email) {
      var result = '';
      firebase
        .database()
        .ref('cm-casemanager')
        .on('value', (data) => {
          const dictionary = data.val();
          //console.log('data val ' + data.val());
          const keys = Object.keys(dictionary);
          //console.log('keys ' + keys);
          for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            //console.log(dictionary[k] + " " + email);
            if (dictionary[k] == email) {
                this.setState({
                    key: k
                });
                console.log(this.state.key);
            }
          }
        });
  };

  componentDidMount() {
    if (firebase.auth().currentUser && firebase.auth().currentUser.email) {
        email = firebase.auth().currentUser.email;
        if (email.includes("casemanager")) {
            // set the state with firebase authentication
            var id = email.charAt(11); // LOL
            console.log(id)
            firebase.database()
                .ref('case_manager/' + "CM000"  + id)
                .on('value', snapshot => {
                    let data = snapshot.val() ? snapshot.val(): []
                    this.setState({
                        clients: data['clients']
                    });
                    console.log(this.state.clients);
                    // grab clients details
                    firebase.database()
                        .ref('client/')
                        .on('value', snapshot => {
                            let data = snapshot.val() ? snapshot.val(): {}
                            console.log(data);
                            let result = []
                            var index = 0;
                            if (!this.state.clients) return;
                            for (var key in data) {
                                if (this.state.clients.includes(key)) {
                                    result[index] = (data[key]);
                                    result[index]['id'] = key;
                                    index++;
                                }
                            }
                            this.setState({
                                clients_data: result
                            });
                            console.log(this.state.clients_data);
                    })
                })
        }
    }
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
    for (const client of this.state.clients_data) {
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
            <Text>Name: {client.name}</Text>
            <Text>Client id: {client.id}</Text>
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
