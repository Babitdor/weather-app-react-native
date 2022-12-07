import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Drop from 'react-native-vector-icons/Entypo';
import moment from 'moment';
export default function MainWeather(props) {
  const Weather = props.WeatherData;
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#181818' : 'lightgray'},
        ]}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <TouchableOpacity>
              <Icon
                name="search"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
            </TouchableOpacity>
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
              <View style={styles.Location}>
                <Drop
                  name="location-pin"
                  size={30}
                  color={'rgba(194, 56, 4, 0.8)'}
                />
                <Text
                  style={{fontSize: 30, color: isDarkMode ? 'white' : 'black',fontWeight:'bold'}}>
                  {Weather.name}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Drop
                name="dots-three-vertical"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.MainSection}>
            <Image
              resizeMode="contain"
              style={{
                width: '100%',
                height: 210,
                marginTop: -20,
              }}
              source={{
                uri: `http://openweathermap.org/img/wn/${Weather.weather[0].icon}@4x.png`,
              }}
            />
            <Text
              style={{
                fontSize: 120,
                color: 'black',
                fontWeight: 'bold',
                marginLeft: 35,
                color: 'rgba(236, 90, 36, 0.8)',
              }}>
              {Math.trunc(Weather.main.temp - 273.15)}&#176;
            </Text>
            <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>
              {Weather.weather[0].main}
            </Text>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>
              {moment(Weather.dt * 1000).format('llll')}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.Data}>
            <View style={{alignItems: 'center'}}>
              <Icon
                size={25}
                color={'rgba(236, 90, 36, 0.8)'}
                name="wind"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: isDarkMode ? 'white' : 'black',
                  marginTop: 12,
                }}>
                {Weather.wind.speed} Km/h
              </Text>
              <Text style={{color: isDarkMode ? 'white' : 'black'}}>Wind</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Icon
                size={25}
                color={'rgba(236, 90, 36, 0.8)'}
                name="cloud"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: isDarkMode ? 'white' : 'black',
                  marginTop: 12,
                }}>
                {Weather.clouds.all}%
              </Text>
              <Text style={{color: isDarkMode ? 'white' : 'black'}}>
                Cloudiness
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Drop
                size={25}
                color={'rgba(236, 90, 36, 0.8)'}
                name="drop"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: isDarkMode ? 'white' : 'black',
                  marginTop: 12,
                }}>
                {Weather.main.humidity} %
              </Text>
              <Text style={{color: isDarkMode ? 'white' : 'black'}}>
                Humidity
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  header: {
    flex: 4,
  },
  footer: {
    padding: 20,
  },
  Data: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MainSection: {
    flexDirectionL: 'column',
    alignItems: 'center',
  },
});
