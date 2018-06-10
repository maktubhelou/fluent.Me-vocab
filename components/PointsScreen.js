import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const PointsScreen = ({
  expPoints,
  wordsStudied,
  sentencesStudied,
  sentencesReviewed,
}) => (
  <View style={styles.container} >
    <Text style={styles.header} >Experience Points: {expPoints}</Text>
    <Text style={styles.header} >Words Studied: {wordsStudied}</Text>
    <Text style={styles.header} >Sentences Studied: {sentencesStudied}</Text>
    <Text style={styles.header} >Sentences Reviewed: {sentencesReviewed}</Text>
  </View>
);

PointsScreen.propTypes = {
  expPoints: PropTypes.number.isRequired,
  wordsStudied: PropTypes.number.isRequired,
  sentencesStudied: PropTypes.number.isRequired,
  sentencesReviewed: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  expPoints: state.studyStats.expPoints,
  wordsStudied: state.studyStats.wordsStudied,
  sentencesStudied: state.studyStats.sentencesStudied,
  sentencesReviewed: state.studyStats.currentSentenceIndex,
});

export default connect(mapStateToProps)(PointsScreen);

