import React, {useState, useEffect} from 'react';
import {TextInput, View, FlatList, Text} from 'react-native';
import Input from '../Input';
import style from './ProductInput.styles';
import Button from '../Button';
import ProductCard from '../ProductCard';
import Products from '../Products/Products';

const ProductInput = ({price}) => {
  const [all, setAll] = useState([]);

  const handleInput = (name, price) => {
    const productData = {
      name: name,
      price: price,
      id: Math.random(),
      date: new Date(),
    };
    setAll([productData, ...all]);
  };

  const renderItem = ({item}) => <ProductCard product={item} />;

  useEffect(() => {
    setAll(all.sort((a, b) => a.price - b.price));
  }, [all]);
  const handleOnGrow = () => {
    all.sort((a, b) => a.price - b.price);
    setAll([...all]);
  };
  const handleOnDecreas = () => {
    all.reverse((a, b) => a.price - b.price);
    setAll([...all]);
  };
  const handleOnDate = () => {
    all.sort((a, b) => a.date - b.date);
    setAll([...all]);
  };

  return (
    <View style={style.container}>
      <Products
        onGrow={handleOnGrow}
        onDecreas={handleOnDecreas}
        onDate={handleOnDate}></Products>
      <View style={style.flatContainer}>
        <FlatList
          data={all}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>

        <Input style={style.inputContainer} onSave={handleInput} />
      </View>
    </View>
  );
};
export default ProductInput;
