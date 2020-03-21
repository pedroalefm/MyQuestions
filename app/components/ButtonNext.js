import React from 'react';
import {View, Text, Image} from 'react-native';
import * as images from '../assets';

const ButtonNext = props => {
  return (
    <View
      style={{
        backgroundColor: '#4D8AF0',
        width: 237,
        height: 48,
        flexDirection: 'row',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
        {props.text}
      </Text>
      <Image source={images.ARROW_RIGHT} />
    </View>
  );
};

export default ButtonNext;
