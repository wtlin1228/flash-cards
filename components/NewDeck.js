import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { white, purple } from '../utils/colors'

class NewDeck extends Component {
  state = {
    input: '',
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handleSubmit = () => {
    this.props.dispatch(addDeck(this.state.input))
  }

  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={this.handleTextChange}
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

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps)(NewDeck)