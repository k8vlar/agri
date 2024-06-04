import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Category from "./Category";
import Profil from "./Profil";
import Products from "./Products";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import SettingsPage from "./SettingsPage";
import Login from "./Login";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "darkgreen",
        tabBarInactiveTintColor: Colors.danger,
        // tabBarButton: (props) => <TouchableOpacity {...props} />
        tabBarStyle: { backgroundColor: Colors.greenAgriLight },
        // tabBarBackground:()=>{Colors.greenAgri}

        headerStyle: {
          backgroundColor: Colors.greenAgri,
        },
        headerTitleStyle: {
          color: Colors.danger,
          fontSize: 32,
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Bienvenue sur TerroTerro"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Category}
        options={{
          tabBarLabel: "Catégories",
          tabBarIcon: ({ color }) => (
            <Ionicons name="albums" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Produits"
        component={Products}
        options={{
          tabBarLabel: "Produits",
          tabBarIcon: ({ color }) => (
            <Ionicons name="card" size={20} color={color} />
          ),
          tabBarBadge: "0",
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Mon Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mon Compte"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
const styles = StyleSheet.create({
  
});
