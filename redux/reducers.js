import { combineReducers } from 'redux';
import studyStats from './studyStats';
import sentenceStore from './sentenceStore';
import checkAnswer from './checkAnswer';
import reviewList from './reviewList';
import vocabList from './vocabList';

const reducers = combineReducers({
  vocabList,
  reviewList,
  checkAnswer,
  sentenceStore,
  studyStats,
});

export default reducers;