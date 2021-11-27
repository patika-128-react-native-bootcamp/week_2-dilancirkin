import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import style from './Input.styles';
import Button from '../Button';

const Input = ({onSave}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    onSave(name, price);
  };
  return (
    <View style={style.container}>
      <View>
        <Text>Name</Text>
        <TextInput style={style.input} onChangeText={setName}></TextInput>
        <Text>Price</Text>
        <TextInput style={style.input} onChangeText={setPrice}></TextInput>
        <Button title="Add" onPress={handleAdd} />
      </View>
    </View>
  );
};
export default Input;
