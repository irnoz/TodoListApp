import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <Image source={require('../assets/placeholder.jpg')} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default DetailsScreen;
