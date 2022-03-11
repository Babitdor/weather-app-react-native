import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Testing icon
import moment from 'moment-timezone';
function Expandedview({current,time_zone}) {
  return (
    <View style={styles.external_container}>
        <View style={styles.heading_container}>
            <TouchableOpacity><EvilIcons name="arrow-left" size={50} color="white" /></TouchableOpacity>
        </View>

        <View style={styles.container_loc_time}>
            <MaterialCommunityIcons name="weather-partly-cloudy" size={80} color="white" />
            <Text style={styles.loc_time}>Los Angeles</Text>
            <Text style={styles.loc_time_1}>Cloudy, 7:44 am</Text>
        </View>

        <View style={styles.container_temp}>
            <Text style={styles.degree}>23&#176;</Text>
        </View>

        <View style={styles.AdditionalWeatherData_Container}> 
            <WeatherTime title="Humidity" value={current? current.humidity : "N/A "} unit="%"/> 
            <WeatherTime title="Pressure" value={current? current.pressure : "N/A "} unit="hPA"/> 
            <WeatherTime title="Visibility" value={current? (current.visibility/1000) : "N/A "}  unit="km"/> 
            <WeatherTime title="Wind Speed" value={current? current.wind_speed : "N/A "}  unit="m/s"/> 
            <WeatherTime title="Sunrise" value={current? moment.tz(current.sunrise*1000,time_zone).format('HH:mm') : "N/A "}  unit="am"/> 
            <WeatherTime title="Sunset" value={current? moment.tz(current.sunset*1000,time_zone).format('HH:mm') : "N/A "}  unit="pm"/>
        </View>
    </View>
  )
}

function WeatherTime({title, value, unit}) {

    return(
      <View style={styles.WeatherItems}>
        <Text style={styles.AdditionalWeatherData_Text}>{title}</Text>
        <Text style={styles.AdditionalWeatherData_Text}>{value}  {unit}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    
    external_container:{
        flex:1,
    },
    heading_container:{
        flex:1,
        padding:20,
    },
    container_loc_time:{
        padding:20,
        flex:1,
        padding:50,
        alignItems:'center'
    },
    container_temp:{
        flex:1,
        padding:20,
    },
    loc_time:{
        fontSize:50,
        color:'white',
        textAlign:'center'
    },
    loc_time_1:{
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    degree:{
        fontSize:100,
        color:'white',
        marginLeft:10,
        textAlign:'center',
        padding:10,

    },
    details:{
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    container_details:{
        flex:1,
        justifyContent:'space-between',
        padding:50,
    },
    AdditionalWeatherData_Text:{
        color:'white',
        fontSize:15,
        fontWeight:100,
    },
    AdditionalWeatherData_Container:{
        flex:1,
        padding: 40,
        marginTop: 10
    },
    WeatherItems:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

})

export default Expandedview