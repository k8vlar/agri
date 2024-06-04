import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View, } from 'react-native';
import Colors from './constants/Colors';
import MyTabs from './components/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';



export default function App()  {
 
  
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    <View style={styles.container}>
   
      <Header/>
      
    <MyTabs/>
      
      
    </View>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.greenAgri,
    paddingTop:50,
    
  },
  
});


//app/app.js -> / resembles main page
//app/home.js -> /home resembles home page
//app/profil.js -> /profile resembles profil page
//app/products.js -> /products resembles products page
