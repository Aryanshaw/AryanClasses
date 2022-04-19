/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {getAuth} from 'firebase/auth';
import Contact from './Contact';

const Profile = ({navigation}) => {
  // const auth = getAuth();
  // const user = auth.currentUser;

  const user = auth().currentUser;
  const userId = user.uid;
  firestore()
    .collection('accounts')
    .doc(userId)
    .get({name: user.displayName})
    .then(() => {
      console.log(user.displayName);
    });
  if (user !== null) {
    const displayname = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const phone = user.phoneNumber;
    // const password = user.pas;
    // console.log(displayname,email,photoURL);
    // console.log(user)
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Signed Out succesfull', ToastAndroid.SHORT);
        navigation.replace('Login');
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Functions will be implemented soon</Text>
      <Text style={styles.header}>{user.email}</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={signOut}>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 250,
  },
  header: {
    fontSize: 20,
    color: '#7d7d7d',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Profile;
