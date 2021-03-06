import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { $secondaryRed, $tertiaryRed, $secondaryWhite } from '../styles/styles'

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: 20
  },
  emptyBar: {
    height: 9,
    width: 250,
    backgroundColor: $secondaryWhite,
    borderRadius: 50,
    borderColor: $tertiaryRed,
    borderWidth: 2
  },
  progress: {
    height: 5,
    backgroundColor: $secondaryRed,
    borderRadius: 50
  }
})

class ProgressBar extends React.Component {
  render() {
    const progress = this.props.progress
    const total = this.props.total
    const progPercent = progress / total

    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.emptyBar}>
          <View style={[styles.progress, { width: 250 * progPercent }]} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  vocabList: state.vocabList,
  reviewList: state.reviewList
})

export default connect(mapStateToProps)(ProgressBar)
