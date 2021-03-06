import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Image from 'react-native-image-progress'
import ProgressPie from 'react-native-progress/Pie'
import PropTypes from 'prop-types'
import {
  $secondaryWhite,
  $primaryRed,
  $secondaryRed,
  $primaryWhite
} from '../../styles/styles'

const styles = StyleSheet.create({})

class CategoryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thisCategoryLength: props.allCategories[props.category].listWords.length
    }
  }

  handlePress() {
    this.props.loadCategory(this.props.category)
    this.props.loadWords(this.props.category)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.handlePress()}
        underlayColor={$primaryWhite}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 2.5,
            justifyContent: 'space-between',
            borderRadius: 50,
            borderColor: $secondaryWhite,
            borderWidth:
              this.props.currentCategoryTitle === this.props.category ? 2 : 0,
            backgroundColor:
              this.props.currentCategoryTitle === this.props.category
                ? $primaryWhite
                : $secondaryWhite
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              overflow: 'hidden',
              borderRadius: 25,
              marginLeft: 2.5,
              marginTop: 2.5,
              marginBottom: 2.5
            }}>
            <Image
              source={{
                uri: `https://source.unsplash.com/50x50/?${this.props.category}`
              }}
              indicator={ProgressPie}
              indicatorProps={{
                size: 50,
                borderWidth: 0,
                color: $secondaryRed,
                unfilledColor: $primaryWhite
              }}
              style={{
                height: 50,
                width: 50
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 40,
              marginRight: 40,
              alignSelf: 'center',
              color: $secondaryRed,
              fontSize:
                this.props.currentCategoryTitle === this.props.category
                  ? 24
                  : 18
            }}>
            {this.props.category}
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: $primaryRed,
              alignSelf: 'center',
              marginRight: 10
            }}>
            {this.state.thisCategoryLength}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  currentCategoryTitle: PropTypes.string.isRequired,
  allCategories: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  currentCategoryTitle: state.sentenceStore.currentCategoryTitle,
  allCategories: state.sentenceStore.allCategories
})

const mapDispatchToProps = dispatch => ({
  loadCategory: category => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadWords: category => dispatch({ type: 'LOAD_WORDS', category })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
