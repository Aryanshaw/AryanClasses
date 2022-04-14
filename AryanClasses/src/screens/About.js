/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Aryan Shaw</Text>
      <Text style={styles.paraStyle}>I am a full stack developer</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60',
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.subHeader}>About me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          {' '}
          With a dog named Lulu by his side, Army Ranger Briggs races down the
          Pacific Coast to make it to a soldier's funeral on time. Along the
          way, Briggs and Lulu drive each other completely crazy, break a
          handful of laws, narrowly evade death, and learn to let down their
          guards to have a fighting chance of finding happiness.
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow me on my social networks</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/_lil_weird/')
          }>
          <Image
            style={styles.iconImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/_lil_weird/')
          }>
          <Image
            style={styles.iconImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/_lil_weird/')
          }>
          <Image
            style={styles.iconImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: '100%',
    height: 50,
    aspectRatio:1,
  },
  menuContainer:{
   width:"100%",
   flexDirection:"row",
   justifyContent:"space-evenly",
  },

  aboutContainer:{
    display:"flex",
    // justifyContent:"center",
    alignItems: "center",
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:18,
    color: '#344055',
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,
    // lineHeight:30,

  },
  paraStyle:{
    fontSize:18,
    color: '#7d7d7d',
    paddingBottom:30,

  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  subHeader:{
    fontSize:18,
    color: '#fff',
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    alignSelf:"center",
  },
  aboutPara:{
    color: '#fff',
  }

});

export default About;
