import moment from 'moment-timezone'
import React from 'react'
import {View,ScrollView,Text,Image,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import Future_forecast from './future_forecast'
import Card1 from '../assets/Card 1.jpg'
import { Ionicons } from '@expo/vector-icons'; 

function Weather_scroll({weatherData}) {
    
  return (
    <View>
        <View style={styles.search}>
        <Text style={styles.title}>My Locations</Text>
        <TouchableOpacity><Ionicons name="add-circle-outline" size={35} color="white" /></TouchableOpacity>
        </View>
        
        <ScrollView horizontal={true} style={styles.Scroll} showsHorizontalScrollIndicator>
        <CurrentTemp data={weatherData && weatherData.length>0 ? weatherData[0]:{}}/>
        <Future_forecast/>
    </ScrollView>
    </View>
  )
}

function Expand() {

    return(
        <View>Hello</View>
    )
}

function CurrentTemp({data}) {

    if(data && data.weather){

        const img = {uri: 'http://openweathermap.org/img/wn/'+data.weather[0].icon +'@4x.png'}
        return(
            

            
            <View style={styles.currenttemp_container}>
                <TouchableOpacity onPress={Expand}>
                <ImageBackground source={Card1} style={styles.image} blurRadius='2'>
                <View style ={styles.innertemp_container}>
                    <Text style={styles.time}>Shillong</Text>
                    <Text style={styles.day}>{moment().format('LT')}</Text>
                    <Text style={styles.temp}>{Math.trunc(data.temp.day)}&#176;</Text>
                    <View style={styles.weather_container}>
                    <Image source={img} style={styles.weather_icon}/>
                    <Text style={styles.desc}>{data.weather[0].main}</Text>
                    </View>
                </View> 
                </ImageBackground>
                </TouchableOpacity>
            </View>
            

    )
    }else{
        return(
        <View></View>
        )
    }
}

const styles = StyleSheet.create({
    weather_icon:{
        width:50,
        height:50,
    },
    Scroll:{
        padding: 20,
        flex: 1,
    },
    search:{
        backgroundColor:'#00000033',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        margin:20,

    },
    currenttemp_container:{
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius: 20,
        margin: 10,
        overflow:'hidden',
        flex: 1,
        zIndex:1,
    },
    title:{
        color:'white',
        fontSize: 20,
        borderRadius:30,
        textShadowRadius:1,
        fontStyle: 'bold',
    },
    day:{
        color:'white',
        fontSize: 15,
        fontStyle: 'bold',
        padding:10,
        fontWeight: '200',
        textAlign: 'center',
    },
    time:{
        color:'white',
        fontSize: 25,
        backgroundColor:"#00000090",
        borderRadius:30,
        textShadowRadius:1,
        fontStyle: 'bold',
        padding:10,
        fontWeight: '200',
        textAlign: 'center',
        shadowOffset:1,
        shadowOpacity:10,
    },
    temp:{
        fontSize:50,
        color:'white',
        fontWeight: '100',
        textAlign:'center'
    },
    innertemp_container:{
        padding: 20,
    },
    weather_container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10,
    },
    desc:{
        fontSize:20,
        color:'white',
        fontWeight: '100',
        textShadowRadius:5,
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        

    }


})


export default Weather_scroll