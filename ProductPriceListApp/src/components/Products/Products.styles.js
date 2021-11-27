import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  listTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#445963',
    borderRadius: 10,
    padding: 7,
    margin: 15,
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  textTab: {
    color: '#445963',
    fontSize: 12,
  },
  btnTabActive: {
    backgroundColor: '#E68380',
  },
});
