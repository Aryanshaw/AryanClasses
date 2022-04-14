/* eslint-disable prettier/prettier */

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Couse from '../api/Couse'
// import * as Animatable from 'react-native-animatable';


const Course = ({navigation}) => {
//  const MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

const CouseCard=({item})=>{

  return(
    
    <View style={styles.mainContainer}>
       <View style={styles.couseContainer}>

         <View > 
           <Image
           style={styles.img}
           source={item.Image}
           resizeMode="contain"
           />
         </View>
           
           <Text style={styles.mainHeader}>{item.title}</Text>
           <Text style={styles.description}>{item.description}</Text>

            <View style={styles.btnContainer}> 
            <TouchableOpacity style={styles.btn}
              onPress={() => navigation.navigate("Contact")}
            >
              <Text style={styles.btnText}>Course Details</Text>
            </TouchableOpacity>
            </View>

        </View>
      </View>
  )
}

  return (
    
    <View>
      {/* <Text>Course</Text> */}
      <FlatList data={Couse}
      keyExtractor={(item) => item.id}
      renderItem={CouseCard}
      />
    </View>
    
  )
}

export default Course

const styles = StyleSheet.create({
  img:{
    width:"100%",
    height:undefined,
    aspectRatio:1,
  },
  mainContainer:{
    paddingHorizontal:20,
  },
  couseContainer:{
    padding:30,
    backgroundColor:"rgba(255,255,255,0.90)",
    textAlign:"center",
    borderRadius:5,
    shadowColor:"grey",
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
  },
  mainHeader:{
    fontSize:22,
    color:"#344055",
    textTransform:"uppercase",
    // fontWeight:"500",
    // paddingTop:15,
    paddingBottom:15,
    textAlign:"center",
  },
  description:{
    textAlign:"center",
    paddingBottom:15,
    lineHeight:20,
    fontSize:16,
    color:"#7d7d7d",
  },
  btnContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",

  },
  btn:{
    backgroundColor:"#809fff",
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  btnText:{
    fontSize:20,
    color:"#eee",

  }

})