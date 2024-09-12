import { StyleSheet, Text, View, Pressable, SafeAreaView,TextInput } from "react-native";
import React,{useRef, useMemo} from "react";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Products from "./Products";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const CustomHeader = ({openModal}) => {
    const SearchBar=()=>(
        <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                <View style={styles.searchField}>
                <Ionicons
             name="search-outline" size={20} color={Colors.danger}
            style={styles.searchIcon}/>
                <TextInput style={styles.input} placeholder="Agriculteurs, Producteurs, ..."/>
                </View>  
                <Link href={'/'} asChild/>  
                <TouchableOpacity style={styles.optionButton} onPress={openModal}>
                <Ionicons
             name="options-outline" size={22} color={Colors.danger}
            style={styles.icon}/>
                </TouchableOpacity>
                </View>
        </View>
    )
   
  return (
    
<SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         <TouchableOpacity /*onPress={creer fonction pour retour en haut de page sur App (Home notamment)}*/> 
        <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
        
      />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
        <Text style={styles.title}>TerroTerro</Text>
        <View style={styles.locationName}>
            <Text style={styles.subTitle}>Nouvelle-Aquitaine</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.danger}/>
        </View>
        </TouchableOpacity>
              
      
       
        <TouchableOpacity>
        <Ionicons
             name="person" size={20} color={Colors.danger}
            style={styles.icon}/>
        </TouchableOpacity>
        </View>
        <SearchBar/>
        
    </SafeAreaView>
  )
}

export default CustomHeader
const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:Colors.greenAgri,
    },  
    container: {
        flexDirection: "row",
        backgroundColor: Colors.greenAgri,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:20,
        width: "100%",
        height:55
      },
    titleContainer:{
        paddingRight:50
      },
    title:{
       fontSize: 14,
       color: Colors.black,
       fontWeight:'bold'
      },
    subTitle:{
       fontSize: 18,
       color: Colors.danger,
      },
      locationName:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
    icon: {
            maxHeight: 20,
            maxWidth: 20,
            margin: 10,
          },
    logo: {
            flex: 1,
            maxHeight: 50,
            maxWidth: 50,
            borderRadius:25,
            backgroundColor:Colors.greenAgri
        },
        buttonProfil: {
            backgroundColor:Colors.danger,
            padding:10,
            borderRadius:50
              },
        searchContainer:{
            height:50,
            backgroundColor:Colors.greenAgri,
            
            marginBottom:5
        },
        optionButton:{
            borderRadius:50,
            paddingRight:20,
        },
        searchField:{
            flex:1,
            marginVertical:6,
            backgroundColor:Colors.darkRedLight,
            borderRadius:8,
            flexDirection:'row',
            alignItems:'center'
        },
        input:{
            padding:2,
            color:Colors.danger,
            fontSize:18

        },
        searchIcon:{
            paddingHorizontal:10
        },
        searchSection:{
            flexDirection:'row',
            gap:30,
            flex:1,
            marginLeft:20,
        }
    })

// const Header = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../assets/images/logo.jpg")}
//         style={styles.logo}
//       />
//       <Text style={styles.logoTitle}>TerroTerro</Text>
//       <View style={styles.logoContainer}>
//         <Pressable
//           style={({ pressed }) => [
//             {
//               backgroundColor: pressed
//                 ? Colors.greenAgri
//                 : Colors.greenAgriLight,
//             },
//           ]}
//           onPress={() => navigation.navigate("Profil")}
//         >
//           <Image
//             source={require("../assets/images/user.png")}
//             style={styles.icon}
//           />
//         </Pressable>
//           <Link href="./Products.js">
//         <Pressable
//           style={({ pressed }) => [
//             {
//               backgroundColor: pressed
//                 ? Colors.greenAgri
//                 : Colors.greenAgriLight,
//             },
//           ]}
//         >
//           <Image
//             source={require("../assets/images/shopping.png")}
//             style={styles.icon}
//           />
//         </Pressable>
//         </Link>
//       </View>
//     </View>
//   );
// };
// export default Header;
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     backgroundColor: Colors.greenAgriLight,
//     marginBottom: 30,
//     alignItems: "center",
//     justifyContent: "space-between",

//     width: "100%",
//   },

//   logoTitle: {
//     color: "#fff",
//     fontSize: 30,
//     margin: 10,
//   },
//   logoContainer: {
//     flexDirection: "row",
//     height: 50,
//   },
//   logo: {
//     flex: 1,
//     maxHeight: 50,
//     maxWidth: 50,
//     margin: 10,
//   },
//   icon: {
//     maxHeight: 20,
//     maxWidth: 20,
//     margin: 10,
//   },
//   buttonProfil: {
//     borderBlockColor: "black",
//   },
// });
