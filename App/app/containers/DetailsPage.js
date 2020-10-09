import React, { Component } from 'react';
import { View, ScrollView,  SafeAreaView, StyleSheet, Image, Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Container, Text } from "native-base";
import CardSection from "../components/CardSection";
import SignedUpEvent from "../components/SignedUpEvent";
import firebase from "firebase";
import ProfilePicture from 'react-native-profile-picture';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userDetails: []
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.profilePicture} resizeMode={"cover"} source={require('../assets/images/guy1.jpg')} />
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Name: " + this.state.userDetails["name"]}
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Income: " + this.state.userDetails["income"]}
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Age: " + this.state.userDetails["age"]}
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            Case Notes
                        </Text>

                    </Card>
                </View>
            </ScrollView>
        )
    }

    componentDidMount() {
        firebase
            .database()
            .ref('client/1')
            .on('value', snapshot => {
                let data = snapshot.val() ? snapshot.val() : {};
                console.log(data);
                this.setState({
                    userDetails: data
                });
        })
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  profilePicture: {
    height: 200,
    width: 200,
    borderRadius: 100,
    left: Dimensions.get('window').width / 4
  },
  card: {
    width: 10000
  },
  cardView: {
    flex: 1,
    flexDirection: "row"
  },
  test: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
