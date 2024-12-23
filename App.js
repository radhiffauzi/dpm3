import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeListScreen from './src/screens/RecipeListScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('RecipeList');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Lifecycle untuk mount dan unmount
  useEffect(() => {
    console.log('App component did mount');
    return () => {
      console.log('App component will unmount');
    };
  }, []);

  // Lifecycle untuk memantau perubahan selectedRecipe
  useEffect(() => {
    if (selectedRecipe !== null) {
      console.log('Selected recipe has been updated:', selectedRecipe);
    }
  }, [selectedRecipe]);

  const navigateToDetail = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentScreen('RecipeDetail');
  };

  const navigateToList = () => {
    setSelectedRecipe(null);
    setCurrentScreen('RecipeList');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'RecipeList' && (
        <RecipeListScreen onRecipePress={navigateToDetail} />
      )}
      {currentScreen === 'RecipeDetail' && selectedRecipe && (
        <RecipeDetailScreen
          recipe={selectedRecipe}
          onBackPress={navigateToList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
