import React from 'react';

import style from './ProductCard.styles';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const ProductCard = ({product}) => {
  const {name, price} = product;
  return (
    <View style={style.listContainer}>
      <Text>{name}</Text>
      <Text style={style.priceText}>{price} TL</Text>
    </View>
  );
};
export default ProductCard;
