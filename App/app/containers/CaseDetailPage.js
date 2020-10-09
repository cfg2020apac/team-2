import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet, 
  TextInput
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";
import { Divider } from "react-native-elements";
import WelcomeBanner from "../components/WelcomeBanner";
import firebase from 'firebase';
import Button from "../components/Button";
import CardSection from "../components/CardSection";

export default class CaseDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      cases_details: [],
      isFetching: false
    };
  }

   componentDidMount() {
       const { navigation } = this.props;
       client_id = navigation.getParam('clientDetails')['id'];
       console.log(client_id)
       firebase.database()
           .ref('case/')
           .on('value', snapshot => {
               let data = snapshot.val() ? snapshot.val() : {};
               console.log(data);
               this.setState({
                   cases: data
               });
               var result = []
               var index = 0;
               for (var key in data) {
                    if (data[key]['client_id'] == client_id) {
                        result[index] = data[key];
                        index++;
                    }
               }
               this.setState({
                    cases_details: result
               });
               console.log(this.state.cases_details);
           })
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
    for (const client of this.state.cases_details) {
      clientCards.push(
          <View>
        <CardItem key={client.id}>
          {/* onPress={()=> {
            this.props.navigation.navigate('<Page Name>', {
              clientDetails: client,
            })
          }}> */}
          <Body>
            <Text>Title: {client.title}</Text>
            <Text>Date: {client.date}</Text>
            <Text>{client.description}</Text>
          </Body>
        </CardItem>
        <Divider/>
        </View>
      );
    }
    const { navigation } = this.props;
    clientDetails = navigation.getParam('clientDetails');
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
        <CardSection>
            <Button onPress={() => this.props.navigation.navigate('AddCaseEvent', {clientDetails: clientDetails})}> Add Case Notes </Button>
        </CardSection>
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
