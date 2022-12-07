# Weather App

## Requirements

This project is a weather app which demonstrates the following:

1. Functional React Components w/ Typescript
2. Asynchronous HTTP calls to 2 different API's
3. Rendering data from API to HTML / CSS
4. .NET Backend (optional)

## Technology Used

React, Typescript, Bootstrap, Axios

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

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

Application will run on **localhost:3000** by default

## Application design

#### Main Components

1. **CurrentForecastPage** This component displays the main page of the app with a search bar and a current forecast.

2. **ForecastList** Renders the list of daily forecasts from weather.api.gov

3. **ForecastListItem**

#### Other Components

1. **Header** Basic Header Component that accepts some props for reusability.
2. **LoadingSpinner**
3. **Page**
4. **SearchBar**

### Hooks

1. **useInputState** This hook makes it easier to share the logic for controlled inputs across the app.

## Resources

### Improvements

Better Error Messaging
Automated Testing

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap

**Axios**: Documentation here: https://axios-http.com/docs/intro
