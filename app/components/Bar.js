import React from 'react';
import {View, Text} from 'react-native';

const Bar = props => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#343C58',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        height: 56,
      }}>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Bar;
