import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import TextButton from './TextButton';
import VocabTools from './VocabTools';

class NewVocab extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: 'LOAD_WORDS' });
  }

  render() {
    const newWordsOnlyList = Object.values(this.props.vocabList).filter(w => w.toReview === false);
    const listToShow = newWordsOnlyList.slice(0, 4);

    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {listToShow.map(word => (
            <View key={word.id}>
              <WordBox
                word={word}
              />
              <VocabTools id={word.id} />
            </View>
          ))}
        </View>
        <ProgressBar />
        <TextButton text="Review" navTo="VocabReview" navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  vocabList: state.vocabList,
});

NewVocab.propTypes = {
  vocabList: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(NewVocab);
