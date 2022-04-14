/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore' ;
import Apploader from './Apploader';
// import LottieView from 'lottie-react-native';


const Contact = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [help, setHelp] = useState('');

  const [loader,setLoader] = useState(false);


  const createId =  ()=>{
    auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      let uid =  auth().currentUser.uid;
         firestore().collection('accounts').doc(uid)
        .set({
          name:name,
          email:email,
          phone:phone,
          password:password,
        }).then(()=>ToastAndroid.show('account created', ToastAndroid.SHORT),setLoader(true), navigation.navigate("Home"))
        .catch(e=>console.log(e))
    })
    .catch(e => {
       if(e.code === 'auth/email-already-in-use'){
      //  ToastAndroid.show('That email already exists',ToastAndroid.SHORT);
      Alert.alert("This email already exists")
       }
       if(e.code === 'auth/invalid-email'){
        // ToastAndroid.show('That email is invalid',ToastAndroid.SHORT);
        Alert.alert("This email is invalid")

       }
       
      console.log(e)
      ToastAndroid.show("invalid password or email",ToastAndroid.SHORT)
      // Alert.alert(e)
    })
  }


  const submit=()=>{

    if(!name || !email || !setEmail|| !phone|| !help){
      Alert.alert("please fill up every fields")
    }else{
      // ToastAndroid.show(`Thank you ${name}`,ToastAndroid.SHORT)
      createId();
      // console.log(name,password)
     
      
    }

  }



  return (
     <>
     {loader? 
     (
       <>
       
       {/* <LottieView source={require('../materials/98195-loader.json')} styles={{backgroundColor: "black"}} autoPlay loop/> */}
       </>
     ) :
    
    
    <ScrollView style={styles.mainContainer}>
     

  
      <Text style={styles.mainHeader}>Level up your Knowlege</Text>

      <Text style={styles.description}>
        You can reach us anytime aryanrot234@gamil.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your name"
           value={name}
           onChangeText={(userData) => setName(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email"
           value={email}
           onChangeText={(userData)=>setEmail(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your phone number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Your mobile number"
           value={phone}
           onChangeText={(userData)=>setPhone(userData)}
           keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="enter 8 digit password"
           value={password}
           onChangeText={(userData)=>setPassword(userData)}
          secureTextEntry

        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can i help you</Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder="Tell us about your self"
           value={help}
           onChangeText={(userData)=>setHelp(userData)}
          numberOfLines={5}
          multiple={true}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed to all the terms and conditions
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            {
              backgroundColor: toggleCheckBox ? '#4630EB' : 'grey',
            },
          ]}
          disabled={!toggleCheckBox}
          onPress= {submit}

          >
          <Text style={styles.btnText}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
}
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },

  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 20,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    // paddingVertical:8,
    borderRadius: 5,

  },

  multilineStyle: {
    paddingVertical: 4,
  },
  btnStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  btnText: {
    color: '#eee',
  },
  wrapper:{
    display:"flex",
    flexDirection:"row",
    marginTop: 20,
  },
  wrapperText: {
    marginLeft:10,
    color: '#7d7d7d',
    marginTop:8,
  }
});

export default Contact;
