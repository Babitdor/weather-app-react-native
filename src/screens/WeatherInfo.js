import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function WeatherInfo({route}) {
  const WeatherData = route.params.Data;
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : '#181818'},
      ]}>
      <View
        style={[
          styles.header,
          {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
        ]}>
        <TouchableOpacity
          style={{
            padding: 10,
            position: 'absolute',
            top: 10,
            left: 5,
            backgroundColor: 'black',
            margin: 10,
            zIndex: 99,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Icon size={25} color={'white'} name="arrow-left" />
        </TouchableOpacity>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@4x.png`,
          }}
          style={{width: '70%', height: 200}}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 32,
              color: isDarkMode ? 'white' : 'black',
              fontWeight: 'bold',
              marginTop: -20,
            }}>
            {moment(WeatherData.dt * 1000).format('dddd')}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 70, color: 'rgba(236, 90, 36, 0.8)'}}>
              {Math.trunc(WeatherData.main.temp_max - 273.15)}&#176;
            </Text>
            <Text style={{fontSize: 50, color: 'rgba(236, 90, 36, 0.8)'}}>
              /{Math.trunc(WeatherData.main.temp_min - 273.15)}&#176;
            </Text>
          </View>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>
            {WeatherData.weather[0].main}
          </Text>
          <Text style={{fontSize: 13, color: 'gray'}}>
            {moment(WeatherData.dt * 1000).format('lll')}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon size={25} color={'rgba(236, 90, 36, 0.8)'} name="wind" />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.wind.speed} m/s
            </Text>
            <Text style={styles.title}>Wind</Text>
          </View>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon size={25} color={'rgba(236, 90, 36, 0.8)'} name="droplet" />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.main.humidity} %
            </Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon size={25} color={'rgba(236, 90, 36, 0.8)'} name="eye" />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.visibility / 1000} km
            </Text>
            <Text style={styles.title}>Visibility</Text>
          </View>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon
              size={25}
              color={'rgba(236, 90, 36, 0.8)'}
              name="cloud-rain"
            />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.main.pressure} hPa
            </Text>
            <Text style={styles.title}>Pressure</Text>
          </View>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon size={25} color={'rgba(236, 90, 36, 0.8)'} name="cloud" />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.clouds.all} %
            </Text>
            <Text style={styles.title}>Clouds</Text>
          </View>
          <View
            style={[
              styles.pill,
              {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
            ]}>
            <Icon
              size={25}
              color={'rgba(236, 90, 36, 0.8)'}
              name="cloud-drizzle"
            />
            <Text
              style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
              {WeatherData.pop} %
            </Text>
            <Text style={styles.title}>Precipitation</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    flex: 2.5,
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  footer: {
    padding: 20,
    flex: 2.5,
  },
  pill: {
    padding: 20,
    margin: 10,
    width: 160,
    height: 110,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  title: {
    color: 'gray',
  },
});
