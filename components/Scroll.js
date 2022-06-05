import React from 'react'
import {View,ScrollView,StyleSheet} from 'react-native'
import Middle from './Middle'


function Scroll({data}) {
    
  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Middle data={data}/>
        </ScrollView>
    </View>
  )
}
export default Scroll