import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from '../styles/styles'

const correctIcon = <MaterialIcons name="check-circle" size={30} color="#900" />
const incorrectIcon = <MaterialIcons name="error" size={30} color="#900" />

const WordCheck = ({ word, checkAnswer, isCorrect, dispatch }) => {
  let answerStatusIcon = ''
  if (isCorrect === true) {
    answerStatusIcon = correctIcon
    dispatch({ type: 'CORRECT_WORD' })
  } else if (isCorrect === false) {
    answerStatusIcon = incorrectIcon
  }

  return (
    <View style={styles.row}>
      <TextInput
        placeholder="..."
        style={styles.answerBox}
        onSubmitEditing={e => checkAnswer(e.nativeEvent.text, word.English)}
      />
      <Text style={styles.p15}>{answerStatusIcon}</Text>
    </View>
  )
}

WordCheck.propTypes = {
  word: PropTypes.object.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

WordCheck.defaultProps = {
  isCorrect: null
}

export default connect()(WordCheck)
