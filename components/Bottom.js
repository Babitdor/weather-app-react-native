import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Bottom({weather}) {
    console.log(weather)
    if(weather){
  return (
      
    
    <View style={styles.container}>
        {/* Clock Component*/}
        <View style={styles.clock_container_bottom}>
            <View style={{alignItems:'center',backgroundColor:"#30b09b",padding:10,borderBottomLeftRadius:20,
        borderBottomRightRadius:20,color:'white',borderWidth:3, borderTopWidth:0,}}>
            <Text style={styles.Day_Month}>Details</Text>
            </View>
            <View style={{flex:1,alignItems:'center',padding:10,color:'white'}}>
            {/* <Image source={img} style={styles.weather_icon}/> */}
            <Text style={styles.temp_text}>Wind Speed : {weather.wind_speed} ms</Text>
            <Text style={styles.temp_text}>Sunrise: {weather.sunrise}</Text>
            <Text style={styles.temp_text}>Sunset: {weather.sunset}</Text>
            <Text style={styles.temp_text}>Humidity: {weather.humidity}</Text>
            <Text style={styles.temp_text}>Pressure: {weather.pressure}</Text>
            </View>
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

export default Bottom

const styles = StyleSheet.create({

    
     container:{
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        overflow:'hidden',
        justifyContent: "space-between",
            
       },
       temp_text:{
        fontSize:15,
       },
       weather_icon:{
        width:120,
        height:120,
        shadowOffset: {width: 2, height: 3},
         shadowColor:'black',
         shadowRadius:0,
       },
       clock_container_bottom:{
         borderRadius:30,
         margin:20,
         backgroundColor:'rgba(255, 255, 255, 0.48)',
         borderWidth:3,
         shadowOffset: {width: 5, height: 2},
         shadowColor:'black',
         shadowRadius:0,
         alignItems:'center'
         
       },
       clock_text:{
          fontSize:20,
          color:'white',
          fontWeight:'bold',
       },
       Day_Month:{
         fontSize: 20,
         color: 'white',
         fontWeight:'bold',
       },
    }
)