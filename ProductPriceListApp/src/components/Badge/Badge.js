import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './Badge.styles';

const Badge = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.listTab}>
        <TouchableOpacity style={styles.btnTab}>
          <Text style={styles.textTab}>Artan Fiyat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnTab}>
          <Text style={styles.textTab}>Azalan Fiyat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnTab}>
          <Text style={styles.textTab}>Tarih</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Badge;
