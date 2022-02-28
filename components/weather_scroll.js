import moment from 'moment-timezone'
import React from 'react'
import {View,ScrollView,Text,Image,StyleSheet} from 'react-native'
import Future_forecast from './future_forecast'

function Weather_scroll({weatherData}) {
  return (
    <ScrollView horizontal={true} style={styles.Scroll}>
        <CurrentTemp data={weatherData && weatherData.length>0 ? weatherData[0]:{}}/>
        <Future_forecast/>
    </ScrollView>
  )
}

function CurrentTemp({data}) {

    if(data && data.weather){

        const img = {uri: 'http://openweathermap.org/img/wn/'+data.weather[0].icon +'@4x.png'}
        return(
            <View style={styles.currenttemp_container}>
                <Image source={img} style={styles.weather_icon}/>
                <View style ={styles.innertemp_container}>
                    <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                    <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                </View>
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
        width:150,
        height:150,
    },
    Scroll:{
        padding: 30,
        flex: 0.6,
    },
    currenttemp_container:{
        flexDirection:'row',
        backgroundColor:'#18181b99',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30,
        borderColor:'white',
        padding: 15,
        blurRadius: 50,
        shadowColor:'white',
        shadowRadius:5,
    },
    day:{
        color:'white',
        fontSize: 20,
        fontStyle: 'bold',
        backgroundColor:"#3c3c44",
        padding:10,
        borderRadius:50,
        fontWeight: '200',
        marginBottom: 15,
        textAlign: 'center',
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight: '100',
        textAlign:'center'
    },
    innertemp_container:{
        padding: 40,
    }

})


export default Weather_scroll