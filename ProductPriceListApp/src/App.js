import React from 'react';
import {Text, SafeAreaView, FlatList, TextInput, View} from 'react-native';
import style from './App.styles';
import Products from './components/Products/Products';
import ProductInput from './components/ProductInput';

export default function () {
  return (
    <SafeAreaView style={style.container}>
      <ProductInput></ProductInput>
    </SafeAreaView>
  );
}
