
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './src/home';
import ConvertedScreen from './src/converted'
import UsersScreen from './src/users';

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:({navigation}) =>({
      title:`Home`,
      headerBackTitle:'Home'
    }),
  },
  Users:{
    screen: UsersScreen,
    navigationOptions:({navigation}) =>({
      title:`Original Map`,
    }),
  },
  Converted:{
    screen: ConvertedScreen,
    navigationOptions:({navigation}) =>({
      title:`Converted Map`,
    }),
  }
},{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:'#f4511e'
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold',
        color:'white',
        flex: 1,
        textAlign:'center'
    }
  },
  mode:'card',
  headerMode:false
})

export default createAppContainer(AppNavigator);
