import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
export default function Card(props) {
  const WeatherData = props.WeatherData;
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('WeatherInfo', {Data: WeatherData})}>
        <View
          key={props.id}
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: isDarkMode ? '#181818' : 'lightgray',
            padding: 10,
            height: props.color ? 155 : 140,
            width: props.color ? 90 : 85,
            margin: 6,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: isDarkMode ? 'white' : 'black',
            }}>
            {moment(WeatherData.dt * 1000).format('ddd')}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'rgba(236, 90, 36, 0.8)',
            }}>
            {Math.trunc(WeatherData.main.temp - 273.15)}&#176;C
          </Text>

          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: `http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@4x.png`,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: '100',
              color: isDarkMode ? 'white' : 'black',
            }}>
            {moment(WeatherData.dt * 1000).format('LT')}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
