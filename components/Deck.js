import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, gray } from '../utils/colors'

class Deck extends Component {
  handleDeckPressed = () => {
      this.props.navigation.navigate(
        'IndividualDeck',
        { deck: this.props.deck['title'] }
      )
  }

  render() {
    const { deck } = this.props
    const num_questions = deck['questions'].length

    return(
      <View style={styles.deck}>
        <TouchableOpacity 
          onPress={this.handleDeckPressed}
        >
          <Text style={styles.title}>
            {deck['title']}
          </Text>
          <Text style={styles.question}>
            {num_questions} cards
          </Text>
        </TouchableOpacity>
      </View>   
    )   
  }
}

const styles = StyleSheet.create({
  deck: {
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
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 5,
  },
  question: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    color: gray,
  }
})

function mapDispatchToProps () {
	return {
		
	}
}

export default connect(mapDispatchToProps)(Deck)
