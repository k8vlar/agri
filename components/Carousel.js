import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

import { useState } from 'react';

const Carousel= () => {
    const [pictures, setPictures]= useState(
        [
          {id:1, title:'Viandes', image:require('../assets/images/carotte.jpg')},
          {id:2, title:'Legumes', image:require('../assets/images/salade.jpg')},
          {id:3, title:'Fruits', image:require('../assets/images/radis.jpg')},
          {id:4, title:'Poissons', image:require('../assets/images/champs agricole.jpg')},
          {id:5, title:'Picture 5', image:require('../assets/images/pomme.jpg')}
        ]
    
      )
      return (
        <FlatList
          style={styles.carousel}
          data={pictures}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image style={styles.pictureCarousel} source={item.image} />
              <Text style={styles.carouselText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} // Make the list horizontal
          pagingEnabled={true} // Enable pagination
          showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
        />
      );
    };
    
export default Carousel

const styles = StyleSheet.create({
    carousel: {
      flex: 1,
      height: 150, // Adjust the height to fit your carousel
    },
    carouselItem: {
      width: 150, // Adjust the width to fit your carousel item
      marginRight: 10, // Add some margin between items
    },
    pictureCarousel: {
      height: 120, // Adjust the height to fit your image
      width: 150, // Adjust the width to fit your image
      borderRadius: 10, // Add some border radius to the image
    },
    carouselText: {
      fontSize: 18, // Adjust the font size to fit your text
      textAlign: 'center', // Center the text
    },
})