import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { white, gray, purple, black } from '../utils/colors'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck
    }
  }

  handleAddCardPressed = () => {
    this.props.navigation.navigate(
      'NewCard',
      { 
        deck_title : this.props.deck, 
      }
    )
  }

  handleStartQuizPressed = () => {
    this.props.navigation.navigate(
      'Quiz',
      {
        deck_title : this.props.deck,
      }
    )
  }
  
  render() {
    const { deck_reducer } = this.props
    const num_questions = deck_reducer['questions'].length

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {deck_reducer['title']}
        </Text>
        <Text style={styles.question}>
          {num_questions} cards
        </Text>
        <TouchableOpacity 
          style={styles.addCard}
          onPress={this.handleAddCardPressed}
        >
          <Text style={styles.text}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.startQuiz}
          onPress={this.handleStartQuizPressed}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
    justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		backgroundColor: white,
		padding: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 50,
    paddingBottom: 5,
  },
  question: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 100,
    color: gray,
  },
  addCard: {
    maxWidth: 150,
    minHeight: 32,
    backgroundColor: black,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingRight: 25,
    paddingLeft: 25,
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    color: white,
  },
  startQuiz: {
    maxWidth: 150,
    minHeight: 32,
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingRight: 25,
    paddingLeft: 25,
  },
})

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck,
    deck_reducer: state[deck],
  }
}

export default connect(mapStateToProps)(IndividualDeck)