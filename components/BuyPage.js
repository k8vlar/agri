import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList,SafeAreaView } from 'react-native';

const ArticleItem = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <View style={styles.articleContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.articleInfo}>
        <Text style={styles.articleName}>{item.name}</Text>
        <Text style={styles.price}>Prix: {item.price.toFixed(2)}€</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const BuyPage = () => {
  const [articles, setArticles] = useState([
    { id: 1, name: "Légume Premium", price: 1.5, image: "https://example.com/tshirt-image.jpg", quantity: 1 },
    { id: 2, name: "Carotte Slim", price: 1.25, image: "https://example.com/jean-image.jpg", quantity: 1 },
    { id: 3, name: "Viande Rouge", price: 3.5, image: "https://example.com/shoes-image.jpg", quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, quantity: newQuantity } : article
    ));
  };

  const totalPrice = articles.reduce((total, article) => total + article.price * article.quantity, 0).toFixed(2);
  const renderFooter = () => (
    <View>
      <Text style={styles.totalPrice}>Prix Total: {totalPrice}€</Text>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Payer Maintenant</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Page de Paiement</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => <ArticleItem item={item} onQuantityChange={updateQuantity} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'center',
    },
    articleContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 20,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    articleInfo: {
      flex: 1,
      marginLeft: 10,
    },
    articleName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price: {
      fontSize: 16,
      color: '#888',
      marginBottom: 5,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: '#ddd',
      padding: 5,
      borderRadius: 5,
    },
    quantityButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    quantity: {
      marginHorizontal: 15,
      fontSize: 18,
    },
    totalPrice: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'right',
    },
    payButton: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    payButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default BuyPage;