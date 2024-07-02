import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendDetail from '../components/FriendDetail';

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <FriendDetail friend={friend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FriendDetailScreen;
