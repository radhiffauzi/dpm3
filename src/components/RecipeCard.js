import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.shortDesc}>
        {recipe.ingredients.slice(0, 2).join(', ')}...
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 15,  // Untuk memberi ruang horizontal
    height: 150, // Ukuran card lebih besar
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  shortDesc: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default RecipeCard;
