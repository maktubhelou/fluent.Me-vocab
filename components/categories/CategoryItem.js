import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressPie from 'react-native-progress/Pie';
import PropTypes from 'prop-types';
import { $secondaryWhite, $primaryRed, $secondaryRed, $primaryWhite, $tertiaryRed, $tertiaryWhite } from '../../styles/styles'
import { connect } from 'react-redux';

export class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisItemCategoryTitle: props.category,
      allCategories: props.allCategories,
      thisCategoryLength: props.allCategories[props.category].listWords.length,
      // thisCategoryLength: 5,
    }
  }
  
  render() {
    return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'row', 
        margin: 5, 
        justifyContent: 'space-between',
        borderRadius: 50,
        borderColor: $secondaryRed,
        borderWidth: this.props.currentCategoryTitle === this.props.category ? 2 : 0,
        backgroundColor: this.props.currentCategoryTitle === this.props.category ? $primaryWhite : $secondaryWhite }}>
         <View 
          style={{
            height: 50,
            width: 50,
            overflow: 'hidden',
            borderRadius: 25,
            marginLeft: 2.5,
            marginTop: 2.5,
            marginBottom: 2.5,
          }}
         >
         <Image 
          source={{ uri: `https://source.unsplash.com/50x50/?${this.props.category}` }} 
          indicator={ProgressPie}
            indicatorProps={{
              size: 50,
              borderWidth: 0,
              color: $secondaryRed,
              unfilledColor: $primaryWhite,
            }}
          style={{ 
            height: 50, 
            width: 50,
            }} />
        </View>
        <Text style={{
          marginLeft: 40,
          marginRight: 40,
          alignSelf: 'center',
          color: $secondaryRed,
          fontSize: this.props.currentCategoryTitle === this.props.category ? 24 : 18, 
          }} >{this.props.category}</Text>
        <Text style={{
          fontSize: 25,
          color: $primaryRed,
          alignSelf: 'center',
          marginRight: 10,
        }}>
          {/* {Math.floor(Math.random()*1000)} */}
          {this.state.thisCategoryLength}
        </Text>
      </View>
    )
  };
};

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCategoryTitle: state.sentenceStore.currentCategoryTitle,
  allCategories: state.sentenceStore.allCategories,
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
