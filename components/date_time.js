import React,{useEffect, useState} from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-web';

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


function Date_time({lat,lon,time_zone}) {
  const[date,setDate] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      const time = new Date()
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      setDate(days[day] + ', ' + date+ ' '+ months[month])
    })

  },[])



  return (
    <View style={styles.container}>
        <View>
        {/* Time Section */}
        <View style={styles.heading}>
          <TouchableOpacity><EvilIcons name="navicon" size={35} color="white"/></TouchableOpacity>
          <TouchableOpacity><Ionicons name="person" size={30} color="white" /></TouchableOpacity>
        </View>
      {/* Location Section */}
        <View style={styles.rightsection}> 
          <Text style={styles.TimeZone}>{time_zone}</Text> 
          <Text style={styles.Lat_Long}>{Math.trunc(lat)}&#176;N {Math.trunc(lon)}&#176;E</Text> 
        </View> 
        {/* Clock Component*/}
        <View style={styles.clock_container_bottom}>
            <Text style={styles.Day_Month}>{date}</Text>
            <Text style={styles.clock_text}>{moment().format('LT')}</Text>
        </View> 
      </View>

      
      
    </View> 
    
  )
}

const styles = StyleSheet.create({

  heading:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
   },
  container:{
      flex:1,
      justifyContent: "space-between",
      padding: 20
        
   },
   clock_container_bottom:{
     flex:2,
     padding:10,
     margin:50,
     alignItems:'center'
     
   },
   clock_text:{
      fontSize:60,
      fontStyle:'bold',
      color:'white',
      fontWeight:'200',
   },
   Day_Month:{
     fontSize: 25,
     color: 'white',
     fontWeight: '300',
     textShadowColor:'black',
     textShadowRadius:1,
   },
   rightsection:{
     flex:1,
     margin:5,
     padding:5,
     textAlign:'right',
   },
   TimeZone:{
     fontSize: 20,
     color:'white',
   },
   Lat_Long:{
     fontSize: 15,
     color : 'white',
     fontWeight:'700',
     fontStyle:'italic'
   },
})

export default Date_time