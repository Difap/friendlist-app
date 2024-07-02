import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendList from '../components/FriendList';

const HomeScreen = ({ navigation }) => {
  const friends = [
    {
      name: 'Guluguluguk',
      age: 204,
      hobby: 'Hiking',
      photo: require('../assets/2.png'),
    },
    {
      name: 'Noutnoutstron',
      age: 158,
      hobby: 'Explore the Universe',
      photo: require('../assets/3.png'),
    },
    {
      name: 'Ohelleueur',
      age: 240,
      hobby: 'Gathering Stick',
      photo: require('../assets/4.png'),
    },
    {
      name: 'Monkey D Carriby',
      age: 33,
      hobby: 'Sail',
      photo: require('../assets/tes.png'),
    },
    {
      name: 'Kaka Coco',
      age: 44,
      hobby: 'Camping',
      photo: require('../assets/tes2.png'),
    },
    {
      name: 'Abah Jaden',
      age: 77,
      hobby: 'Smithing',
      photo: require('../assets/smith.png'),
    },
    {
      name: 'Asep Strike',
      age: 27,
      hobby: 'Fishing',
      photo: require('../assets/9626.png'),
    },
  ];

  const handleDetailPress = (friend) => {
    navigation.navigate('FriendDetail', { friend });
  };

  return (
    <View style={styles.container}>
      <FriendList friends={friends} onDetailPress={handleDetailPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default HomeScreen;
