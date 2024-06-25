import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddTodo = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleAddImage = () => {
    Alert.alert(
      'Add Image',
      'Choose an option',
      [
        { text: 'Take Photo', onPress: takePhoto },
        { text: 'Pick from Gallery', onPress: pickImage },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const canSave = title.trim().length > 0 && image;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add Image" onPress={handleAddImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.saveButtonContainer}>
        <Button title="Save" onPress={() => onSave({ title, image })} disabled={!canSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default AddTodo;
