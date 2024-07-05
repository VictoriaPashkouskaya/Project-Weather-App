# Weather App

Weather App is a simple React application that allows users to get the current weather information for any city. The application uses the OpenWeatherMap API to fetch weather data.

## Features

- Fetch current weather data for any city
- Display temperature, weather conditions, and humidity
- Responsive design using Bootstrap

## Demo

You can check out the live demo of the application [here](https://project-weather-app-67mn.vercel.app/).

## Screenshot

![Weather App Screenshot](screenshot.png)

## Installation

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/project-weather-app.git
   cd project-weather-app ```
Install dependencies:

Make sure you have Node.js installed. Then, install the project dependencies:

 ```sh

npm install
 ```
Get an API key:

Sign up at OpenWeatherMap to get an API key.

Create an .env file:

In the root directory of your project, create a file named .env and add your OpenWeatherMap API key:

 ```env
REACT_APP_OPENWEATHER_API_KEY=your_openweathermap_api_key
Run the app:
```

 ```sh
npm start
The application will be available at http://localhost:3000.
 ```
Usage
Enter the name of a city in the input field.
Click the "Get Weather" button to fetch and display the weather information for the entered city.
Deployment
This project can be easily deployed using Vercel:

Push your code to GitHub:

 ```sh
git add .
git commit -m "Initial commit"
git push origin main
 ```
Deploy with Vercel:

Log in to Vercel and click "New Project".
Import your repository from GitHub.
Set up the environment variable in Vercel with your OpenWeatherMap API key (REACT_APP_OPENWEATHER_API_KEY).
Click "Deploy".
Built With
React
Bootstrap
Axios
OpenWeatherMap API
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
