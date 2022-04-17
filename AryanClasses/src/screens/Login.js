/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import PushNotification from 'react-native-push-notification';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Login successful', ToastAndroid.SHORT),
          navigation.navigate('Home'),
          createChannel();
      })
      .catch(e => {
        if (e.code === 'auth/email-already-in-use') {
          ToastAndroid.show('That email already exists', ToastAndroid.SHORT);
          //  Alert.alert("This email already exists")
        }
        if (e.code === 'auth/invalid-email') {
          ToastAndroid.show('That email is invalid', ToastAndroid.SHORT);
          //  Alert.alert("This email is invalid")
        }

        //  console.log(e)
        ToastAndroid.show('error' + e, ToastAndroid.SHORT);
        // Alert.alert(e)
      });
  };

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'test-channel',
    });
  };

  const handelNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Login Successful ' + email,
      message: "Thank you for joining Aryan Classes you won't be disappointed",
    });

    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: 'Miss me?',
      message: 'You missed your classes today',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1046515019083-2ke8pc0qdvbqm5h3u2jgujhgg6otdh1q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }, []);
  // const component=()=>{
  // }
  const signInWithGoogle = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth()
        .signInWithCredential(googleCredential)
        .then(() => ToastAndroid.show("Login succesful", ToastAndroid.SHORT), navigation.navigate("Home"),console.log(idToken));
        
    } catch (e) {
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        ToastAndroid.show('error' + e, ToastAndroid.SHORT);
      }
      if (e.code === statusCodes.IN_PROGRESS) {
        ToastAndroid.show('error' + e, ToastAndroid.SHORT);
      }
      if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        ToastAndroid.show('error' + e, ToastAndroid.SHORT);
      }
      ToastAndroid.show('error' + e, ToastAndroid.SHORT);
      console.log(e);
    }
  };

  const Signin = () => {
    if (email === '' || password === '') {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
    } else {
      console.log(email, password);
      signin();
      createChannel();
      handelNotification();
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login to your Account</Text>

      <Text style={styles.description}>
        You can reach us anytime aryanrot234@gamil.com
      </Text>

      <Text style={styles.labels}>Enter your Email</Text>
      <View style={[styles.inputContainer, styles.icon1]}>
        <Icons name="email" size={25} style={{flexDirection: 'row'}} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your Email"
          value={email}
          onChangeText={userData => setEmail(userData)}
        />
      </View>

      <Text style={styles.labels}>Enter your Password</Text>
      <View style={[styles.inputContainer, styles.icon1]}>
        <Icons name="onepassword" size={25} style={{flexDirection: 'row'}} />

        <TextInput
          style={styles.inputStyle}
          placeholder="enter 8 digit password"
          value={password}
          onChangeText={userData => setPassword(userData)}
          secureTextEntry
        />
      </View>

      <View style={{paddingHorizontal: 68}}>
        <TouchableOpacity style={styles.btnStyle} onPress={Signin}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={{display: 'flex', flexDirection: 'column', padding: 15}}>
        <View>
          <TouchableOpacity
            style={styles.google}
            onPress={() => signInWithGoogle()}>
            <Icons name="google" size={25} style={{flexDirection: 'row'}} />

            <Text style={styles.btnText1}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.facebook}>
            <Icons name="facebook" size={25} style={{flexDirection: 'row'}} />
            <Text style={styles.btnText2}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 40}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact');
          }}>
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              color: 'blue',
            }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },

  icon1: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    // width:500
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    textAlign: 'center',
    paddingBottom: 20,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 20,
  },

  inputContainer: {
    marginTop: 20,
    display: 'flex',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    // paddingVertical:8,
    width: '100%',
    borderRadius: 5,
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    marginBottom: -20,
    lineHeight: 45,
  },

  inputStyle: {
    paddingHorizontal: 15,
    // fontTransform:"lowercase",
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  btnStyle: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#27A724',
  },
  btnText: {
    color: '#eee',
  },
  btnText1: {
    color: '#eee',

    marginLeft: 5,
  },
  btnText2: {
    color: '#eee',
    marginLeft: 5,
  },

  google: {
    backgroundColor: '#E74C3C',
    padding: 25,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  facebook: {
    backgroundColor: '#2A88D8',
    padding: 25,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    marginTop: 8,
  },
});

export default Login;
