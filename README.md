
# 1337

This is a simple app that developing based on the Angular 13 with Angular Material. Designed responsive UI completely based on pure CSS and the help of javascript. The purpose of the app is to show the list of employees of the company and give the ability to end-user could find target employees base on their name and office and have excellent experience with UI on any kind of device.


# Features

- Responsive layout that works on different kinds of screen sizes `mobile, tablet, etc.`
- Toggle between two layouts `Grid and List view` to display a list of employees
- Sorting list of employees based on name and office
- Filtering list of employees based on name and office


# Technical Features

 - Developing an independent component `List` that provides a sort of widget for other developers that could be using whatever data collection `flat` into it with whatever `Card Item Design`.
 - We are using the `JSON-server` package which gives the ability to mock the JSON data we would receive from a real API but instead fetch our data from our local. That is a good feature for preventing pushing too much load on the real server in the front-end developing process.
 - Using environment features gives us the ability to load different APIs. for dev mode, we are going to use the mock API and for production mode, we are going to use the real API. In production mode, we are loading real data images but in dev mode, we are loading sample images.
 - Using of Interceptor feature of angular for set Authorization only for production mode.
 - Random employees list is selected every time the app is loaded and fetching data from API.

# How To Run App

 - Running `npm install` or `npm i` in order to install all necessary package
 - Running `npm run api` for launching mock API. Navigate to `http://localhost:3000/Employees/`.
 - Running `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 - Setting value for `baseUrl` and `apiKey` in `enviroment.prod.ts` file for deploying your application in `production mode`.
 - Deploying on `local IIS` for production mode of the app run `npm run build:dev` and remember to set the `deploy URL inside `package.json > scripts` with defined URL inside `IIS`. The build artifacts will be stored in the `dist/` directory.
 - Running `ng build --configuration=production` to build the project. The build artifacts will be stored in the `dist/` directory.

# How To Run Tests

 - Running `ng test` to execute the unit tests via `Karma`
 - Developing unit test with jasmine for `Employee Service`
	 - Testing sort functionality
	 - Testing sort functionality
	 - Testing fetches random employees
 - Developing unit test with jasmine for `Authorize Interceptor`
	 - Testing create interceptor
 - Developing unit test with jasmine for `List Component`
	 - Testing create List Component

 