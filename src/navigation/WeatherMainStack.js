import React from 'react';
import {Easing} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import WeatherScreen from '../screens/WeatherScreen';
import WeatherInfo from '../screens/WeatherInfo';


export default function WeatherMainStack() {
  const Stack = createStackNavigator();

  const config = {
    animation: 'Spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: 'Timing',
    config: {
      duration: 500,
      easing: Easing.linear,
    },
  };

  const screenOptions = {
    headerShown: false,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: config,
      close: closeConfig,
    },
  };

  const forFade = ({current, closing}) => ({
    cardStyle: {
      backgroundColor: 'black',
      opacity: current.progress,
      presentaion: 'modal',
    },
  });
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={WeatherScreen}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="WeatherInfo"
          component={WeatherInfo}
          options={{cardStyleInterpolator: forFade}}
        />
      </Stack.Navigator>
    </>
  );
}