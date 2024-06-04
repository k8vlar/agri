import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import BuyPage from "./BuyPage";

import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Carousel></Carousel>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greenAgriLight,
    justifyContent: "center",
    alignItems: "center",
  },
});
