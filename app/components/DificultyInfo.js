import React from 'react';
import {View, Text, Image} from 'react-native';
import * as images from '../assets';

const DificultyInfo = props => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(52,60,88, 0.2)',
        height: 20,
        width: 86,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        alignSelf: 'center',
      }}>
      <Image source={images.START_ON} />
      <Image
        source={
          props.dificulty === 'hard' || props.dificulty === 'medium'
            ? images.START_ON
            : images.START_OFF
        }
      />
      <Image
        source={props.dificulty === 'hard' ? images.START_ON : images.START_OFF}
      />
      <Text
        style={{
          color: '#343C58',
          fontSize: 12,
          fontFamily: 'Roboto',
          marginLeft: 2,
        }}>
        {props.dificulty === 'hard'
          ? 'Hard'
          : props.dificulty === 'medium'
          ? 'Medium'
          : props.dificulty === 'easy'
          ? 'Easy'
          : null}
      </Text>
    </View>
  );
};

export default DificultyInfo;
