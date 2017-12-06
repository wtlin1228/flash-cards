import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { white, black, purple } from './utils/colors'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import IndividualDeck from './components/IndividualDeck'
import { setLocalNotification } from './utils/helpers'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NewDeck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions:{
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions:{
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions:{
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{height: 20}} />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
