import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { white, purple, black, red, green } from '../utils/colors'

class Card extends Component {
  state = {
    q_or_a: 0,
    have_answered: false,
  }

  toggle = () => {
    this.setState(() => ({
      q_or_a: !this.state.q_or_a
    }))
  }

  answerIt = (answer) => {
    if (this.state.have_answered === false) {
      if (answer === this.props.answer) {
        this.props.handleCorrectAnswer()
      } else {
        this.props.handleIncorrectAnswer()
      }

      this.setState(() => ({
        have_answered: true
      }))
    }
  }

  render() {
    const { total_quiz, quiz_num, question, answer } = this.props
    const { q_or_a } = this.state
    const title = q_or_a ? answer : question
    const button_text = q_or_a ? 'question' : 'answer'


    return (
      <View style={styles.card}>
        <Text>{`${quiz_num} / ${total_quiz}`}</Text>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity 
          onPress={this.toggle}
          style={styles.qa_button}
        >
          <Text style={styles.qa_text}>{button_text}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.answerIt('Yes')}
          style={styles.answer_yes_button}
        >
          <Text style={styles.answer_text}>correct</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.answerIt('No')}
          style={styles.answer_no_button}
        >
          <Text style={styles.answer_text}>incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	card: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 10,
  },
  qa_button: {
    maxWidth: 200,
    minHeight: 32,
    backgroundColor: white,
    borderColor: white,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingRight: 25,
    paddingLeft: 25,
    marginBottom: 15,
  },
  qa_text: {
    textAlign: 'center',
    color: red,
  },
  answer_yes_button: {
    minWidth: 200,
    minHeight: 32,
    backgroundColor: green,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingRight: 25,
    paddingLeft: 25,
    marginBottom: 10,
  },
  answer_no_button: {
    minWidth: 200,
    minHeight: 32,
    backgroundColor: red,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingRight: 25,
    paddingLeft: 25,
  },
  answer_text: {
    textAlign: 'center',
    color: white,
  }
})

export default Card