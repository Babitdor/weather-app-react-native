import {API_KEY, API_KEY_ONE_TIME, endpoint, endpoint_1, endpoint_2} from './config';

export async function WeatherService(city = `Shillong`) {
  let weather = await fetch(`${endpoint}${city}&appid=${API_KEY}`);

  let result = await weather.json();
  weather = null;

  return result;
}

export async function WeatherCardService(city = `Shillong`) {
  let weather = await fetch(`${endpoint_1}${city}&appid=${API_KEY}`);

  let result = await weather.json();
  weather = null;

  return result;
}

export async function WeatherCard_Service(
  latitude = 25.56,
  longitude = 91.88,
) {
  let weather = await fetch(
    `${endpoint_2}lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY_ONE_TIME}`,
  );

  let result = await weather.json();
  weather = null;

  return result;
}
