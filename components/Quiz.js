import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, purple } from '../utils/colors'
import Card from './Card'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck_title } = navigation.state.params
    return {
      title: `${deck_title} Quiz`
    }
  }

  state = {
    answer_count: 0,
    answer_correct: 0,
  }

  handleCorrectAnswer = () => {
    this.setState((state) => ({
      answer_count: state.answer_count + 1,
      answer_correct: state.answer_correct + 1,
    }))
  }

  handleIncorrectAnswer = () => {
    this.setState((state) => ({
      answer_count: state.answer_count + 1,
    }))
  }

  render() {
    const { answer_count, answer_correct } = this.state
    const total_quiz = this.props.deck_reducer['questions'].length

    if (total_quiz === answer_count) {
      clearLocalNotification()
        .then(setLocalNotification())

      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            {`You have answered ${answer_count} questions.`}
          </Text>
          <Text style={styles.text}>
            {`Correct answers: ${answer_correct}`}
          </Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        {this.props.deck_reducer['questions'].map((e, index) => {
          return (
            <Card 
              key={index}
              total_quiz={total_quiz}
              quiz_num={index + 1}
              question={e['question']}
              answer={e['answer']}
              handleCorrectAnswer={() => this.handleCorrectAnswer()}
              handleIncorrectAnswer={() => this.handleIncorrectAnswer()}
            />
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
		padding: 15,
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  },
  submit: {
    textAlign: 'center',
    color: purple,
  }
})

function mapStateToProps(state, { navigation }) {
  const { deck_title } = navigation.state.params

  return {
    deck_reducer: state[deck_title],
  }
}

export default connect(mapStateToProps)(Quiz)