import { StyleSheet, View, Button, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Category from "./Category";
import Login from "./Login";
import Products from "./Products";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import BuyPage from "./BuyPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ProductsScreen({ navigation }) {
  return (
    <View>
      <Text>ProductsSecondScreen</Text>
      <Button
        title="go to Category"
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
}
function CategoriesScreen({ navigation }) {
  return (
    <View>
      <Text>CategorySecondScreen</Text>
      <Button
        title="go back to back"
        onPress={() => navigation.navigate("Produits")}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "darkgreen",
        tabBarInactiveTintColor: Colors.danger,
        // tabBarButton: (props) => <TouchableOpacity {...props} />
        tabBarStyle: { backgroundColor: Colors.greenAgri},
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Category}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <Ionicons name="albums" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produits"
        component={Products}
        options={{
          tabBarLabel: "Produits",
          tabBarIcon: ({ color }) => (
            <Ionicons name="nutrition" size={20} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Panier"
        component={BuyPage}
        options={{
          tabBarLabel: "Panier",
          tabBarIcon: ({ color }) => (
            <Ionicons name="card" size={20} color={color} />
          ),
          tabBarBadge: "0",
          headerShown: false,
        }}
      >
        {/* {() => (
          <ProductsStack.Navigator>
            <ProductsStack.Screen
              name="Produits"
              component={Products}
              options={{
                headerShown: false,
              }}
            ></ProductsStack.Screen>
            <ProductsStack.Screen
              name="Categories"
              component={Category} //component={Category} pour atterir sur page de category de la bottomBar
            ></ProductsStack.Screen>
          </ProductsStack.Navigator>
        )} */}
      </Tab.Screen>
      
      <Tab.Screen
        name="Mon Compte"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    
  );
}
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.greenAgri,
        },
        headerTitleStyle: {
          color: Colors.danger,
          fontSize: 32,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Produits"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Category}
      />
      <Stack.Screen
        name="ExternalPage1"
        component={ExternalPage1}
      />
      <Stack.Screen
        name="ExternalPage2"
        component={ExternalPage2}
      />
    </Stack.Navigator>
  );
};

export default MyTabs;
const styles = StyleSheet.create({});
