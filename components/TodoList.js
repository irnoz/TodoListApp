import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onPress }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem item={item} onDelete={onDelete} onPress={() => onPress(item)} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default TodoList;
