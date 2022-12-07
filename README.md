# Weather App

## Requirements

This project is a weather app which demonstrates the following:

1. Functional React Components w/ Typescript
2. Asynchronous HTTP calls to 2 different API's
3. Rendering data from API to HTML / CSS
4. .NET Backend (optional)

## Technology Used

React (Create-React-App), Typescript, Bootstrap, Axios

## Live Application URL

### https://codesandbox.io/p/github/btaz21/weather-app/main

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs
Note that you’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine.

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Local Development

Clone the project into local

Install all npm packages. Go into project folder and type the following command:

```bash
npm install
```

To run the application, type the following command

```bash
npm start
```

Application will run on **localhost:3000** by default

## Application design

#### Main Components

1. **CurrentForecastBox** This component displays the current weather for the geographic center of the USA (on page load) or the current weather for whatever address is input by end user.

2. **ForecastList** Renders an array of daily forecasts from weather.api.gov based on the address that was added by end user. Since the size of the array is pretty small, memoization was not added

3. **ForecastListItem** Daily forecast component that can accept a number of weather related props for a given day.

4. **SearchBar** Form with two controlled inputs for street address and zip code. In a larger app, would likely use external library to help with react form building (i.e. formik or react-hook-form) as well as a validation library such as yup. I created some basic validation just to show some good practices.

#### Other Components

1. **Header** Basic header component that accepts some props for reusability.

2. **LoadingSpinner** Spinner component to show end user that data is loading from external API. In a larger app, might customize this more to include props such as color, size, type, etc for reusability.

3. **Page** Mainly for layout purposes, accepts child component

### Hooks

1. **useInputState** This hook makes it easier to handle controlled react inputs across the application. Provides a value, a change handler, and an option to reset input.
2. **useWeatherState** Another custom hook that makes use of the weather forecast to provide some fun, UI based components (weather icons, custom turtledoves, and background images)

## Resources

### Improvements

1. Better error handling / messaging
2. Automated testing
3. Providing some indication of a required input on the input itself

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap

**Axios**: Documentation here: https://axios-http.com/docs/intro
