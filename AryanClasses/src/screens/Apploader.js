/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// import LottieView from 'lottie-react-native';

const Apploader = () => {
  return (
    <View styles={[StyleSheet.absoluteFillObject, styles.container]}>
     
     {/* <LottieView source={require('../materials/98195-loader.json')} autoPlay loop/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      justifyContent:"center",
      width:"100%",
      height:"100%",
      marginTop:500,
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.3)',
      zIndex:1,
  },
  Text:{
      color:'#fff',
      fontSize:623,
      fontWeight:'bold',
  }
});

export default Apploader;
