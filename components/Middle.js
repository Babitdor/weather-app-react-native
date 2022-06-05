import moment from 'moment-timezone';
import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native';

function Middle({data}) {
    // console.log(data)
  return (
    <View style={styles.container}>
        {
            data && data.length > 0 ?
            data.map((data, idx)=>(
                idx !==0 &&  <Forecast key={idx}  forecastitem={data}/>
            ))
            :
            <View/>
        }
        
    </View>
  )
}


function Forecast({id,forecastitem}) {

    
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastitem.weather[0].icon+"@2x.png"}

    return (
       <View style = {styles.ForecastContainer} key={id}>
           <Text style={styles.day}>{moment(forecastitem.dt * 1000).format('ddd')}</Text>
           <Image source={img} style={styles.image}/>
           <Text style={styles.temp}>Night - {forecastitem.temp.night}&#176;C</Text>
           <Text style={styles.temp}>Day - {forecastitem.temp.day}&#176;C</Text>
       </View> 
    )
}



const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        zIndex:1,
          
     },
     image: {
        width: 100,
        height:100,
        zIndex:10,
        shadowColor: '#202020',
        shadowOffset: {width: 2, height: 1},
        shadowRadius: 1,
    },
    ForecastContainer:{
        backgroundColor:'rgba(255, 255, 255, 0.14)',
        flex:1,
        alignItems:'center',
        borderRadius: 30,
        borderWidth:3,
        width:185,
        height:220,
        margin:10,
        
        borderColor:'black',
        shadowOffset: {width: 5, height: 2},
        shadowColor:'black',
        shadowRadius:0,
    },
    day:{
        color:'white',
        borderWidth:2,
        fontSize: 20,
        borderTopWidth:0,
        fontStyle: 'bold',
        backgroundColor:"#30b09b",
        padding:10,
        width:100,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        fontWeight: '100',
        marginBottom: 15,
        textAlign :'center',
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight: 'bolder',
        textAlign:'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 1
        
    },
    }
)
export default Middle;

