import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const FriendList = ({ friends, onDetailPress }) => {
  return (
    <View style={styles.container}>
      {friends.map((friend, index) => (
        <View key={index} style={styles.friendContainer}>
          <Image source={friend.photo} style={styles.friendPhoto} />
          <View style={styles.infoContainer}>
            <Text style={styles.friendName}>{friend.name}</Text>
            <Button title="Detail" onPress={() => onDetailPress(friend)} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#e0f7fa', 
    borderRadius: 10,
    padding: 10,
  },
  friendPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendName: {
    fontSize: 18,
  },
});

export default FriendList;
