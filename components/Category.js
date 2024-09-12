import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';4
import { useState } from 'react';

const Category = () => {
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
    <View style={styles.categoryPage}>
      <Text>HELLO Category
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut culpa, nobis explicabo earum placeat perspiciatis sed sint architecto officia error. Nobis consequuntur, aliquam magnam eius culpa nesciunt beatae molestias. Soluta!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia voluptatibus magnam ex quis atque reprehenderit nam, enim, cumque cupiditate sit. Veniam earum, expedita obcaecati amet recusandae sunt quod mollitia?
        Saepe, odit nam non, molestias necessitatibus vero dolorum repellat consequatur libero accusantium ea qui! Sequi cupiditate error laboriosam exercitationem quisquam ducimus, minima laudantium ut corporis molestiae magni similique amet debitis.
        Dolores enim esse, quas repudiandae reiciendis veritatis tenetur aut porro sed voluptate repellendus fugiat odit ipsa error accusantium quia magni! Adipisci quas, dolorem itaque at tempora impedit cumque delectus necessitatibus.
        Illo aperiam beatae expedita cum doloremque maiores enim quaerat dolorem possimus laboriosam corporis error hic aut voluptatum voluptatibus natus, culpa nesciunt, consequatur tempora debitis porro dicta ducimus recusandae ea! Minima!
        Laudantium molestiae modi, veritatis, fuga, beatae voluptates deserunt quis officia praesentium inventore porro quisquam ipsam? Ex modi recusandae perferendis nobis deserunt id ullam saepe, facere fugit, nam, magnam commodi quis.
        Corrupti perspiciatis sed, qui voluptates nulla distinctio, id nam officia non maiores ex eius ab consectetur cumque quas in enim saepe reiciendis nostrum itaque fuga impedit laudantium sint explicabo. Tempora?
      </Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  
  categoryPage: {
    flex: 1,
    backgroundColor:Colors.greenAgriLight,
    justifyContent:"center",
    alignItems:"center"
  
}
})