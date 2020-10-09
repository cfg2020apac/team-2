import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  Alert,
  Linking
} from "react-native";
import { Header, Text, Left, Body, Right, Title, Card, CardItem, Icon, Thumbnail } from "native-base";
import { Divider } from "react-native-elements";
import WelcomeBanner from "../components/WelcomeBanner"
import qs from 'qs';

export async function sendEmail(to, to_two,  subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to},${to_two}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

export default class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false
    };

    this.acceptOrReject = this.acceptOrReject.bind(this);
    this.didTapAccept = this.didTapAccept.bind(this);
  }

  acceptOrReject() {
    Alert.alert(
            "Matched Acquired!",
            "Accept or reject the matching?!",
            [
              { text: "Accept", onPress: () =>  {this.didTapAccept()}},
              { text: "Reject", onPress: () => { console.log("rejected!")}}
            ],
            { cancelable: false }
    );
  }

  didTapAccept() {
  var matches = [[
        {
          "id": "20",
          "name": "Jill",
          "age": 20,
          "income": 1000,
          "email": "jill@gmail.com",
          "found_job": true,
          "cases": [
            "case_id_1",
          ],
          "status": 1,
        },
        {
          "id": "2",
          "name": "Wei Jie",
          "age": 20,
          "income": 500,
          "email": "behweichen@gmail.com",
          "found_job": false,
          "cases": [
            "case_id_2",
          ],
          "status": 2,
        },],
        [
          {
            "id": "3",
            "name": "Bobby",
            "age": 10,
            "income": 1000,
            "email": "bobby@gmail.com",
            "found_job": true,
            "cases": [
              "case_id_3",
            ],
            "status": 3,
          },
          {
            "id": "15",
            "name": "Jack",
            "age": 20,
            "income": 500,
            "email": "jack@gmail.com",
            "found_job": false,
            "cases": [
              "case_id_4",
            ],
            "status": 4,
          },],
      ]
    sendEmail(matches[0][0]['email'], matches[0][1]['email'] , "To whomever it may concern, \nWe offer you a flatmate!" ,"Matched Received!").then(() => {
        console.log("it worked!");
    })
  }

  render() {
    var matches = [[
      {
        "id": "20",
        "name": "Jill",
        "age": 20,
        "income": 1000,
        "email": "jill@gmail.com",
        "found_job": true, 
        "cases": [
          "case_id_1",
        ], 
        "status": 1, 
      },
      {
        "id": "2",
        "name": "Wei Jie",
        "age": 20, 
        "income": 500,
        "email": "behweichen@gmail.com",
        "found_job": false, 
        "cases": [
          "case_id_2",
        ], 
        "status": 2, 
      },],
      [
        {
          "id": "3",
          "name": "Bobby",
          "age": 10, 
          "income": 1000,
          "email": "bobby@gmail.com",
          "found_job": true, 
          "cases": [
            "case_id_3",
          ], 
          "status": 3, 
        },
        {
          "id": "15",
          "name": "Jack",
          "age": 20, 
          "income": 500,
          "email": "jack@gmail.com",
          "found_job": false, 
          "cases": [
            "case_id_4",
          ], 
          "status": 4, 
        },],
    ]
    var matchCards = []
    for (const match of matches) {
      matchCards.push(
        <TouchableOpacity onPress={this.acceptOrReject}>
            <CardItem key={match[0].id}>
                {/* onPress={()=> {
                    this.props.navigation.navigate('<Page Name>', {
                    matchDetails: match,
                    })
                }}> */}
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                    <Thumbnail source={{ uri: 'https://img.tapimg.com/market/lcs/ba1c796fc180a9a2ea9a3105530f35ee_360.png?imageMogr2/auto-orient/strip' }} />
                    <View style={{alignItems:"flex-end"}}>
                        <Text>{match[0].name}</Text>
                        <Text>{match[0].id}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Thumbnail source={{ uri: 'https://img.tapimg.com/market/lcs/ba1c796fc180a9a2ea9a3105530f35ee_360.png?imageMogr2/auto-orient/strip' }} />
                    <View style={{alignItems:"flex-start"}}>
                        <Text>{match[1].name}</Text>
                        <Text>{match[1].id}</Text>
                    </View>
                </View>
            </CardItem>
            <Divider/>
        </TouchableOpacity>
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
            <CardItem header>
                <Text>Possible Matches</Text>
            </CardItem>
            <Divider/>
          {matchCards}
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
