# Fetching random user data

A project to apply for a role as Frontend Developer at Agria Djurförsäkring.

## About this project

A React application that fetches and displays random user data from the [Ramdom User Generator API](https://randomuser.me/). The app shows the user's name, email, phone number, and profile picture. It also has a button to fetch additional users and displays a loading indicator while data is being fetched.

I am using TypeScript for type safety and plain CSS for styling the page, including media queries to make it responsive.

## Project Structure

- `src/`: Contains all the source code
  - `components/`: Contains all React components, each with its own directory
    - `Button/`: Contains the Button component
      - `Button.css`: Styling for the Button component
      - `Button.tsx`: Implementation of the Button component
    - `ErrorMessage/`: Contains the ErrorMessage component
      - `ErrorMessage.css`: Styling for the ErrorMessage component
      - `ErrorMessage.tsx`: Implementation of the ErrorMessage component
    - `Spinner/`: Contains the Spinner component
      - `Spinner.css`: Styling for the Spinner component
      - `Spinner.tsx`: Implementation of the Spinner component
    - `UserData/`: Contains the UserData component
      - `UserData.css`: Styling for the UserData component
      - `UserData.tsx`: Implementation of the UserData component
  - `App.tsx`: Main application component that manages state and API calls
  - `App.css`: Global styling for the application
  - `utils/`: Utility functions
    - `http.ts`: Contains helper functions for HTTP requests

## Features

- Fetches random user data from an API and displays it
- Responsive design using CSS media queries
- TypeScript for type safety
- Error handling for API requests

## Get started

In order to start this project, follow this steps:

1. Make sure you have npm & git installed on your machine
2. Clone the repository using your terminal: `git clone [link-to-this-project]`
3. Navigate into the project directory: `cd [project-directory]`
4. Install all dependencies: `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Potential Improvements

To enhance user experience, we could potentially:

- Add local storage to save user data between sessions
- Implement additional features like user search or filters
- Improve the overall design and add animations

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch: `git checkout -b feat/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feat/AmazingFeature`
5. Open a pull request

## Author

Josefine Brorson, 2024
