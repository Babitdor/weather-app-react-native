import React from 'react'
import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

function Future_forecast() {
  return (
    <View style={{flexDirection:'row'}}>
        <FutureForecastItem/>
        <FutureForecastItem/>
        <FutureForecastItem/>
        <FutureForecastItem/>
    </View>
  )
}

function FutureForecastItem() {
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}

    return (
        <TouchableOpacity>
       <View style = {styles.FutureForecast_Container}>
           <Text style={styles.day}>Mon</Text>
           <Image source={img} style={styles.image}/>
           <Text style={styles.temp}>Night - 26&#176;C</Text>
           <Text style={styles.temp}>Day - 36&#176;C</Text>
       </View> 
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
    },
    FutureForecast_Container:{
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius: 20,
        shadowColor:'white',
        shadowRadius:5,
        borderColor:'#eee',
        padding: 30,
        margin: 10,
        marginLeft:10,
        marginRight:10,
        flex: 1,
    },
    day:{
        color:'white',
        fontSize: 20,
        fontStyle: 'bold',
        backgroundColor:"#3c3c44",
        padding:10,
        borderRadius:50,
        fontWeight: '100',
        marginBottom: 15,
        textAlign :'center',
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight: '100',
        textAlign:'center'
    },
})

export default Future_forecast