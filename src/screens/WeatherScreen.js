import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainWeather from '../components/Weather/MainWeather';
import WeatherCards from '../components/Weather/WeatherCards';
import {WeatherService, Weather_16Days_Service} from '../utils/services';

export default function WeatherScreen() {
  const [WeatherData, setWeatherData] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    WeatherService('Shillong')
      .then(data => setWeatherData(data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : '#181818'},
      ]}>
      {WeatherData && WeatherData.weather ? (
        <>
          <MainWeather WeatherData={WeatherData} />
          <WeatherCards
            lat={WeatherData.coord.lat}
            lon={WeatherData.coord.lon}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
