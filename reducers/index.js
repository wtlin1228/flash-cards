import { ADD_DECK, ADD_CARD } from '../actions'

const init_state = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Pets: {
    title: 'Pets',
    questions: [
      {
        question: 'Do I like dogs?',
        answer: 'No'
      },
      {
        question: 'Do I like cats?',
        answer: 'Yes'
      },
      {
        question: 'Do I like birds?',
        answer: 'No'
      },
      {
        question: 'Do I like pigs?',
        answer: 'Yes'
      }
    ]
  }
}

function entries(state = init_state, action) {
  switch (action.type) {
    case ADD_DECK :
      state[action.deck] = {
        title: action.deck,
        questions: []
      }
      return {
        ...state
      }
    
    case ADD_CARD : {
      const { deck_title, question, answer } = action.card
      
      return Object.assign({}, state, 
        {[deck_title]: {
          title: deck_title, 
          questions: state[deck_title].questions.concat({
            question: question, 
            answer: answer
          })}
        }
      )
    }
      

    default :
      return state
  }
}

export default entries