import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FriendDetail = ({ friend }) => {
  return (
    <View style={styles.container}>
      <Image source={friend.photo} style={styles.friendPhoto} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.age}>Age: {friend.age}</Text>
      <Text style={styles.hobby}>Hobby: {friend.hobby}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  friendPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    marginBottom: 5,
  },
  hobby: {
    fontSize: 18,
  },
});

export default FriendDetail;
