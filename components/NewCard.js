import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, NavigationActions } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { white, purple } from '../utils/colors'

class NewCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    question: '',
    answer: '',
  }

  handleQuestionChange = (question) => {
    this.setState(() => ({
      question
    }))
  }

  handleAnswerChange = (answer) => {
    this.setState(() => ({
      answer
    }))
  }

  handleSubmit = () => {
    this.props.dispatch(addCard({
      question: this.state.question,
      answer: this.state.answer,
      deck_title: this.props.deck_title
    }))

    this.props.goBack()
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}>New question</Text>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={this.handleQuestionChange}
        />
        <Text style={styles.text}>The question's answer (Yes/No)</Text>
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={this.handleAnswerChange}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 10,
  },
  submit: {
    textAlign: 'center',
    color: purple,
  }
})

function mapStateToProps(state, { navigation }) {
  const { deck_title } = navigation.state.params
  return {
    deck_title,
    goBack: () => navigation.goBack(),
  }
}

export default connect(mapStateToProps)(NewCard)