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


export default class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false
    };
  }

  render() {
    var matches = [[
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
      },],
      [
        {
          "id": "client_id_3",
          "name": "client_name_3", 
          "age": 10, 
          "income": 1000, 
          "found_job": true, 
          "cases": [
            "case_id_3",
          ], 
          "status": 3, 
        },
        {
          "id": "client_id_4",
          "name": "client_name_4", 
          "age": 20, 
          "income": 500, 
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
        <View>
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
