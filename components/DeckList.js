import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { white } from '../utils/colors'

class DeckList extends Component {
  state = {
    
  }

  render() {
    const { entries, navigation } = this.props

    return (
      <ScrollView style={styles.container}>
        {Object.keys(entries).map((title) => {
          return (
            <Deck 
              deck={entries[title]}
              key={title}
              navigation={navigation}
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
	}
})

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(DeckList)