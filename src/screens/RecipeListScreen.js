import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { dummyRecipes } from '../utils/dummyRecipes';

const RecipeListScreen = ({ onRecipePress }) => {
  return (
    <View style={styles.container}>
      {/* Menambahkan judul di layar daftar resep */}
      <Text style={styles.appTitle}>IOT Gallery</Text>

      <FlatList
        data={dummyRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onRecipePress(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 50, backgroundColor: '#f8f9fa' },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#ff5722',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipeListScreen;
