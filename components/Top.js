import React,{useEffect, useState} from 'react'
import moment from 'moment-timezone'
import {View,Text,StyleSheet,Image} from 'react-native'
import Scroll from './Scroll'

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function Top({current,data}) {

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
    if(current && current.weather && data){
      const img = {uri: 'http://openweathermap.org/img/wn/'+current.weather[0].icon +'@4x.png'}
    return (
    <View style={styles.container}>
        {/* Clock Component*/}
        <View style={styles.clock_container_bottom}>
            <View style={{alignItems:'center',padding:10,borderBottomLeftRadius:20,
        borderBottomRightRadius:20,color:'white'}}>
            <Text style={styles.clock_text}>{moment().format('LT')}</Text>
            <Text style={styles.Day_Month}>{date}</Text>
            </View>
            <View style={{flex:1,alignItems:'center',padding:10,color:'white'}}>
            <Image source={img} style={styles.weather_icon}/>
            <Text style={styles.temp_type}>{current.weather[0].main}</Text>
            <Text style={styles.temp_text}>{Math.trunc(current.temp)}&#176;</Text>
            </View>
        </View>
        <View>
          <Scroll data={data}/>
        </View>
    </View>
  )
    }
    else{
      return(
        <View></View>
      )
    }
}

export default Top

const styles = StyleSheet.create({

  container:{
    // backgroundColor:'#a0eee1',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    flex:2,
    justifyContent:'center',
        
   },
   temp_text:{
    fontSize:40,
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 1
   },
   temp_type:{
    fontSize:20,
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 1
   },
   weather_icon:{
    width:160,
    height:120,
    zIndex:1,
    shadowOffset: {width: 2, height: 3},
     shadowColor:'black',
     shadowRadius:0,
   },
   clock_container_bottom:{
     borderRadius:30,
     margin:20,
     alignItems:'center'
     
   },
   clock_text:{
      fontSize:50,
      color:'white',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 2, height: 1},
      textShadowRadius: 3,
      fontWeight:'bold',
   },
   Day_Month:{
     fontSize: 20,
     textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 3,
     color: 'white',
     fontWeight:'bold',
   },
})
