import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddTodo from '../components/AddTodo';

const AddScreen = ({ route, navigation }) => {
  const { addTodo } = route.params;

  return (
    <View style={styles.container}>
      <AddTodo onSave={(todo) => {
        addTodo(todo);
        navigation.goBack();
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AddScreen;
