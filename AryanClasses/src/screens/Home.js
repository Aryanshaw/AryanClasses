/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Menu from '../component/Menu'
// import PushNotification from "react-native-push-notification";

const Home = ({navigation}) => {

  const description ="The lorem ipsum is a placeholder text used in publishing and graphic design contains all the letters of the alphabet."

  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Image
          style={styles.headerimg}
          resizeMode="contain"
          source={require('../materials/logonew.jpg')}
        />
        <Text style={styles.textStyle}>Welcome to</Text>
        <Text style={[styles.textStyle, {fontSize: 33, color: 'purple' , marginTop:0}]}>
          Aryan classes
        </Text>

        <Text style={[styles.paragraphStyle]}> {description} </Text>

      </View>
      
      <View style={{marginBottom:40,}}>
      <View style={[styles.lineColor]}></View>
        <Menu/>
        <View style={[styles.lineColor]}></View>
      
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    backgroundColor: '#EDFBFB',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    textAlign: 'center',
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10,
  },
  headerimg:{
    height:undefined,
    width: '100%',
    aspectRatio: 1,
    display:"flex",
    alignItems: 'stretch',
    marginTop:30,
    borderRadius:20,
  },
  textStyle:{
  fontSize:30,
  color:"#344055",
  textTransform: "uppercase",
  },
  paragraphStyle:{
    textAlign: "left",
   fontSize:19,
   color:"#7d7d7d",
   marginTop:30,
   paddingBottom:10,
   lineHeight:26,
   letterSpacing:2,
  },
  lineColor:{
    // marginBottom:20,
    borderWidth:0.5,
    borderColor:"grey",
  }
});

export default Home;
