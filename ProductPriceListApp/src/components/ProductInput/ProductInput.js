import React, {useState} from 'react';
import {TextInput, View, FlatList, Text} from 'react-native';
import Input from '../Input';
import style from './ProductInput.styles';
import Button from '../Button';
import ProductCard from '../ProductCard';

const ProductInput = ({}) => {
  const [all, setAll] = useState([]);

  const handleInput = ({name, price}) => {
    const productData = {
      name: name,
      price: price,
    };
    setAll([productData, ...all]);
  };

  console.log('ball' + all);
  const renderItem = ({item}) => (
    <Text>
      name={item.name} price={item.price}
    </Text>
  );

  return (
    <View>
      <View>
        <FlatList data={all} renderItem={renderItem}></FlatList>
      </View>
      <View>
        <Input onSave={handleInput} />
      </View>
    </View>
  );
  console.log('all' + all);
};
export default ProductInput;
