import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import BuyPage from "./BuyPage";
import Map from "./Map";
import WebviewComponent from "./WebviewComponent";
import { Dimensions } from "react-native";

import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <ScrollView >
      <View>
        <View style={styles.homeWebView}>
        <WebviewComponent />
        </View>
      
      <View style={styles.homeCarousel}>
      <Carousel />
     </View>
     <View>
     

     </View>
      </View>
     
      

    <Text>
      iatur nulla reprehenderit. Assumenda dolorem vero odit. Accusamus fugiat dolores esse voluptatum qui cupiditate illo corporis necessitatibus, liberm rem error sunt porro.
    </Text>
   
    </ScrollView>
    
    
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWebView: {
    
  },
  homeCarousel:{
    paddingTop:10
  }
});
