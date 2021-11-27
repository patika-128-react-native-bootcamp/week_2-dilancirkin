import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './Products.styles';

const Products = ({onGrow, onDecreas, onDate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.listTab}>
        <TouchableOpacity style={styles.btnTab} onPress={onGrow}>
          <Text style={styles.textTab}>Artan Fiyat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnTab} onPress={onDecreas}>
          <Text style={styles.textTab}>Azalan Fiyat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnTab} onPress={onDate}>
          <Text style={styles.textTab}>Tarih</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Products;
