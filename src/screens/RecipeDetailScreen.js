import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

const RecipeDetailScreen = ({ recipe, onBackPress }) => {

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.sectionTitle}>Spesifikasi:</Text>
      {recipe.ingredients.map((item, index) => (
        <Text key={index} style={styles.text}>
          - {item}
        </Text>
      ))}
      <Text style={styles.sectionTitle}></Text>
      {recipe.steps.map((item, index) => (
        <Text key={index} style={styles.text}>
          {index + 1}. {item}
        </Text>
      ))}
      <Button title="Kembali" onPress={onBackPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,  // Memberikan ruang bawah
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ff5722',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
});

export default RecipeDetailScreen;
