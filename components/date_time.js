import React,{useEffect, useState} from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function WeatherTime({title, value, unit}) {

  return(
    <View style={styles.WeatherItems}>
      <Text style={styles.AdditionalWeatherData_Text}>{title}</Text>
      <Text style={styles.AdditionalWeatherData_Text}>{value}  {unit}</Text>
    </View>
  )
}

function Date_time({current,lat,lon,time_zone,visibility,wind}) {
  const[date,setDate] = useState('')
  const[time,setTime] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      const time = new Date()
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours()
      const hours_12HR = hour >= 13 ? hour%12: hour
      const minutes = time.getMinutes();
      const AM_PM = hour>=12 ? 'PM' : 'AM'
      
      setTime((hours_12HR<10 ? '0'+hours_12HR : hours_12HR) + ':' +(minutes<10? '0' + minutes: minutes)+ ' ' + AM_PM)

      setDate(days[day] + ', ' + date+ ' '+ months[month])
    })

  },[])



  return (
    <View style={styles.container}>
      <View>
        {/* Time Section */}
        <View><Text style={styles.Time}>{time}</Text></View>

        {/* Day, Month Section */}
        <View><Text style={styles.Day_Month}>{date}</Text></View>

        {/* Other Weather related Data Section*/}
        <View style={styles.Location_container_bottom}>
        <Text style={styles.Location_text}>Shillong,IN</Text>
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

      {/* Location Section */}
      <View style={styles.rightsection}>
        <Text style={styles.TimeZone}>{time_zone}</Text>
        <Text style={styles.Lat_Long}>{lat}&#176;N {lon}&#176;E</Text>
        
      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({

   container: {
      flex:1.5,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50,
      padding: 20
        
   },
   Location_container_bottom:{
     backgroundColor : "#18181b99",
     padding:10,
     shadowColor:'black',
     shadowRadius:5,
     borderRadius:20,
     textAlign:'center',
     marginTop:10,
     
   },
   Location_text:{
      fontSize:45,
      fontStyle:'bold',
      color:'white',
      fontWeight:'200',
   },
   Time: {
     fontSize: 45,
     color: 'white',
     fontWeight: '100',
     textShadowColor:'black',
     textShadowRadius:1,
   },
   Day_Month:{
     fontSize: 25,
     color: 'white',
     fontWeight: '300',
     textShadowColor:'black',
     textShadowRadius:1,
   },
   rightsection:{
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
   AdditionalWeatherData_Container:{
     backgroundColor : "#18181b99",
     shadowColor:'black',
     shadowRadius:5,
     borderRadius: 20,
     padding: 20,
     marginTop: 10
   },

   WeatherItems:{
      flexDirection:'row',
      justifyContent:'space-between'
    },

   AdditionalWeatherData_Text:{
     color:'white',
     fontSize:14,
     fontWeight:100,
     fontStyle:'italic',
   },



})

export default Date_time