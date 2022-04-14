/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const UserData = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => 
  {getUserData()}, 
  []);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );

      const realData = await response.json();
      setmydata(realData);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };


  const userData = ({item}) => {
    return (
      <>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{uri: item.image}} />
          </View>

          <View>
            <View style={styles.bioDataContainer}>
              <Text style={styles.bioData}>Bio-data</Text>
              <Text style={styles.idNumber}>
                {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
              </Text>
            </View>

            <View style={styles.mainContent}>
              <Text style={styles.myName}>Name: {item.name}</Text>
              <Text style={styles.myName}>email: {item.email}</Text>
              <Text style={styles.myName}>mobile: {item.mobile}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List of Student</Text>
      <FlatList
      keyExtractor={(item)=>item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={mydata} renderItem={userData} />
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  mainContainer: {
    // paddingVertical: 50,
    display: 'flex',
    justifyContent:"center",
    alignItems: "center",
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#ebedee',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
    justifyContent:"center",
    // alignSelf:"center",
  },
  bioDataContainer:{
    width:"100%",
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor:"#353535",
    paddingVertical:10,

  },
  idNumber:{
    fontSize:20,
    color: "rgba(255,255,255,0.5)",
    paddingRight:5,

  },
  bioData:{
    fontSize:30,
    color:"#fff"
  },
  mainHeader:{
    fontSize:30,
    color:"#a18ce5",
    textAlign:"center"
  },
  imgContainer:{
    padding:10,
  },
  img:{
    width:"100%",
    height:180,
  },
  mainContent:{
    padding:10,
    backgroundColor:"#353535",
    borderRadius:5,
  },
  myName:{
    fontSize:14,
    color:"#FFFFFF",
    marginBottom:10,
    alignSelf:"flex-start",
    textTransform:"capitalize",
  }
});
