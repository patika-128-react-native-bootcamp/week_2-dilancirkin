import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './Button.styles';

const Button = ({title, onPress}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress} style={style.btncontainer}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
