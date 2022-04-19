/* eslint-disable prettier/prettier */

import {useNavigation} from "@react-navigation/native";
import React from 'react';
import { View , TouchableOpacity,Text , StyleSheet,Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';



const Menu = () =>{
 
  const loggedIn =()=>{
    if(auth().currentUser!=null){
       navigation.navigate('profile')
    }else{
        navigation.navigate('Login')
    }
  }

    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
          <TouchableOpacity
           style={styles.btnstyle}
           onPress={() => navigation.navigate('Course')}
          >
              {/* <Text style={styles.textStyle}> Course </Text> */}
            <Image 
            style={styles.iconStyle}
            source={{uri:"https://img.icons8.com/stickers/90/000000/training.png"}}
            />
         
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.btnstyle}
           onPress={() => navigation.navigate('Student')}
          >
            <Image 
            style={styles.iconStyle}
            source={{uri:"https://img.icons8.com/stickers/344/user.png"}}
            />
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.btnstyle}
           onPress={() => navigation.navigate('About')}
          >
             <Image 
            style={styles.iconStyle}
            source={{uri:"https://img.icons8.com/stickers/100/000000/about.png"}}
            />
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.btnstyle}
           onPress={() => loggedIn()}
          >
              <Image 
            style={styles.iconStyle}
            source={{uri:"https://img.icons8.com/stickers/100/000000/phone-office.png"}}
            />
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
    },
    textStyle: {
        textTransform: 'uppercase',
        // marginBottom:50,
        margin:20,
    },
    iconStyle:{
     width:"100%",
     height:50,
     aspectRatio:1,
     margin:20,
    },
});


export default Menu;
