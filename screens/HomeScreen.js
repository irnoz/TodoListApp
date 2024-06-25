import React, { useState, useEffect, useCallback } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from '../components/TodoList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();

  const loadTodos = async () => {
    const todosData = await AsyncStorage.getItem('todos');
    if (todosData) {
      setTodos(JSON.parse(todosData));
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTodos();
    }, [])
  );

  const saveTodos = async (todos) => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    const newTodos = [...todos, { ...todo, id: Date.now() }];
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Add', { addTodo })}
          title="Add"
        />
      ),
    });
  }, [navigation, addTodo]);

  return (
    <View style={styles.container}>
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onPress={(item) => navigation.navigate('Details', { item })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
