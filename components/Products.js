import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';

const Products = () => {
  
  const navigation = useNavigation()
  return (
    <View style={styles.container}
   >
      <Text>Products</Text>
      
      <Button title="GoBack" onPress={() =>navigation.goBack()}>
        GoBack
      </Button>
      <Button title="GoPush" onPress={() =>navigation.navigate('Bienvenue sur TerroTerro')}>
        GoPush
      </Button>

    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor:Colors.greenAgriLight,
      justifyContent:"center",
      alignItems:"center"
    
  }
})