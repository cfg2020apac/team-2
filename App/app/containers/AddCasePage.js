import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import { Divider } from "react-native-elements";
import WelcomeBanner from "../components/WelcomeBanner"
import firebase from 'firebase'
import Input from "../components/Input";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import Button from "../components/Button";

export default class AddCasePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: "",
            description: "",
        }
        this.updateDatabase = this.updateDatabase.bind(this);
    }

    updateDatabase() {
        if (this.state.date == "" || this.state.description == "" || this.state.title == "") {
            alert("Please input date,description and title!");
        } else {
            const { navigation } = this.props;
            clientId = navigation.getParam('clientDetails')['id'];
            clientDetails = navigation.getParam('clientDetails');
            firebase.database()
                .ref(`case/${this.state.title}`)
                .set({
                    client_id: clientId,
                    date: this.state.date,
                    title: this.state.title,
                    description: this.state.description
                })
                .then(() => {
                    console.log("Success!");
                })
            Alert.alert(
                "Case Note Created",
                "Click Ok to head back to Case Details Page!",
                [
                  { text: "OK", onPress: () => this.props.navigation.navigate('CaseEvent', {
                                               clientDetails: clientDetails
                  })}
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        clientId = navigation.getParam('clientDetails')['id'];
        clientDetails = navigation.getParam('clientDetails');
        return (
          <SafeAreaView>
            <ScrollView>
              <Card>
                <CardSection>
                  <Input
                    label="Title"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    label="Date/Time"
                    onChangeText={date => this.setState({ date })}
                    value={this.state.date}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    label="Description"
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                  />
                </CardSection>
                <CardSection />
                <CardSection>
                  <Button onPress={this.updateDatabase}>Create Case Notes</Button>
                </CardSection>
                <CardSection>
                  <Button onPress={() => this.props.navigation.navigate('CaseEvent', {clientDetails: clientDetails})}>
                    Cancel
                  </Button>
                </CardSection>
              </Card>
            </ScrollView>
          </SafeAreaView>
        );
      }
}