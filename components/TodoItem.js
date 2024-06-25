import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onDelete, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Button title="X" onPress={() => onDelete(item.id)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default TodoItem;
