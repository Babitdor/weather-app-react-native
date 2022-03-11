import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Date_time from './components/date_time';
import Weather_scroll from './components/weather_scroll';
import React,{useEffect,useState} from 'react';
import {font} from 'expo'
import Expandedview from './components/expandedview';

const API_KEY = 'd69ab37f921ef3e010611120b6b05e02';
const img = require('./assets/background.jpg')
export default function App() {

  const[data, setData]=useState({});  

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((success)=>{

      let{latitude,longitude} = success.coords;
      FetchDataFromApi(latitude,longitude)
      
    },(err)=> {
      if(err){
        FetchDataFromApi("N/A","N/A")
      }
    })
  },[])

  const FetchDataFromApi = (latitude,longitude) => {
      fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(response=>response.json()).then(data => {
      console.log(data)
      setData(data)
    })

  }


  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} blurRadius={2}>
        {/* <Expandedview current={data.current} lat={data.lat} lon={data.lon} time_zone={data.timezone} visibility={data.visibility} wind={data.wind}/> */}
        <Date_time current={data.current} lat={data.lat} lon={data.lon} time_zone={data.timezone} visibility={data.visibility} wind={data.wind}/> 
        <Weather_scroll weatherData={data.daily}/> 
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  }

});


