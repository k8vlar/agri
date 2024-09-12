import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View,Text, ScrollView } from 'react-native';
import Colors from './constants/Colors';
import MyTabs from './components/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
// import Header from './components/Header';
import CustomHeader from './components/CustomHeader'
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React,{useRef, useMemo, useState} from 'react';
import Profil from './components/Profil';

export default function MainApp()  {
  
  const bottomSheetModalRef = useRef(null);
    const openModal = () => {
    bottomSheetModalRef.current?.present();
    
  }
    const snapPoints= useMemo(() => ['95%'], [])
    
  
  return (
    
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
    <NavigationContainer>
    <StatusBar style="auto" />
    <View style={styles.container}>
    <CustomHeader openModal={openModal}></CustomHeader>
      {/* <Header/> */}
      
      <BottomSheetModal 
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={0}
        backgroundStyle={{borderRadius:50}}
        >
        

        
        <View style={styles.modalContainer}>
        <View>{Profil}</View>
        </View>
    </BottomSheetModal>
    
    
    <MyTabs/>
    
      
    </View>
    
    </NavigationContainer>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.greenAgri,
    paddingTop:50,
    
  },
  modalContainer:{
    flex:1,
    alignItems:'center',
    padding:10,

  },
  
});



