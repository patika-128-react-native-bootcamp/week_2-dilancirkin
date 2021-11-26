import React from 'react';
import {Text, SafeAreaView, FlatList, TextInput, View} from 'react-native';
import Button from './components/Button';
import ProductInput from './components/ProductInput/ProductInput';
import Badge from './components/Badge';
import style from './App.styles';
export default function () {
  return (
    <SafeAreaView style={style.container}>
      <Badge></Badge>

      <View style={style.container2}></View>
      <View style={style.container4}>
        <ProductInput></ProductInput>
      </View>
    </SafeAreaView>
  );
}
