import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import Img from './components/assets/Image2.jpg'
import Bottom from './components/Bottom';

import Top from './components/Top';

const API_KEY = 'd69ab37f921ef3e010611120b6b05e02';

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
    <ImageBackground source={Img} style={styles.image} blurRadius={3}>
    <View style={styles.container}>
      <Top current={data.current} data={data.daily}/>
      <Bottom style={{flex:3}} weather={data.current}/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  }
});
