import React, { Component } from 'react';
import { View, ScrollView,  SafeAreaView, StyleSheet, Image, Dimensions, BackHandler} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Container, Text, Header, Left, Body, Right, Title } from "native-base";
import CardSection from "../components/CardSection";
import SignedUpEvent from "../components/SignedUpEvent";
import firebase from "firebase";
import ProfilePicture from 'react-native-profile-picture';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        console.log(navigation.getParam('clientDetails'))
        this.setState({
             userDetails: navigation.getParam('clientDetails')
        })
        this.state = {
          userDetails: [],
        };
    }

    render() {
        const { navigation } = this.props;
        let client = navigation.getParam('clientDetails');
        return (
            <ScrollView>
                <Header>
                      <Left/>
                      <Body>
                        <Title>Header</Title>
                      </Body>
                      <Right>
                        <Icon name="notifications"/>
                      </Right>
                </Header>
                <View style={styles.container}>
                    <Image style={styles.profilePicture} resizeMode={"cover"} source={require('../assets/images/guy1.jpg')} />
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Name: " + client["name"]}
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Income: " + client["income"]}
                        </Text>
                    </Card>
                    <Card>
                        <Text style={{marginBottom: 10}}>
                            {"Age: " + client["age"]}
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
        console.log(this.props.navigation);
        //BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
    console.log(this.props.navigation);
    console.log("Hello?");
        this.props.navigation.pop();
        return true;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "1%"
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
