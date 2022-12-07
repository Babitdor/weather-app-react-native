import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';
import {WeatherCardService} from '../../utils/services';

export default function WeatherCards() {
  const [WeatherCardData, setWeatherCardData] = useState([]);
  useEffect(() => {
    WeatherCardService('Shillong')
      .then(data => {
        setWeatherCardData(data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  console.log(Object.entries(WeatherCardData));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Forecast
        </Text>
      </View>
      <View style={styles.footer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={WeatherCardData.list}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <Card WeatherData={item} key="{item}" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  footer: {
    padding: 10,
    marginHorizontal: 10,
  },
});
