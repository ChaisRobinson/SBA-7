Image Search App

This project is a React-based web application that allows users to search for images using the Unsplash API. The app features a visually appealing homepage with a parallax effect and a search functionality that displays the retrieved images.
Technologies Used

React.js: A JavaScript library for building user interfaces. It was used to create the entire application.
React Router: A library for handling client-side routing in React applications.
react-scroll-parallax: A library for creating parallax effects in React.
Unsplash API: A third-party API for accessing a vast collection of high-quality images.
CSS: Used for styling the application.
React Icons: A library for adding icons to the application.

Approach:

The application follows a component-based architecture, where each component represents a specific part of the user interface. The main components are:

App: The root component that sets up the routing and renders the Navbar, Homepage, ApiSearchBar, and Footer components.

Navbar: A navigation bar component with links to the Homepage and ApiSearchBar components.

Homepage: A component that displays a visually appealing parallax effect using the react-scroll-parallax library.

ApiSearchBar: A component that allows users to search for images using the Unsplash API. It includes an input field, a search button, and a section to display the retrieved images.

Footer: A footer component with additional information and social media links.

The ApiSearchBar component handles the search functionality by making requests to the Unsplash API using the fetch API and updating the component state with the retrieved images.

Live Site
You can view the live site at https://chaisrobinson.github.io/


Usage Instructions:

Clone the repository to your local machine.
Navigate to the project directory and install the dependencies by running npm install.
Obtain an API key from the Unsplash API by creating an account and replacing the placeholder API key in the ApiSearchBar.jsx file with your own key.
Start the development server with npm start.
Open your browser and visit http://localhost:3000 to see the application running.

To search for images, follow these steps:

Navigate to the /api route by clicking the "Image Search API" link in the navigation bar.
Enter a search term in the input field and press the "Search" button or hit Enter.
The retrieved images will be displayed below the search bar.

Feel free to explore the code and make modifications as needed. If you have any questions or suggestions, please open an issue or submit a pull request.
Getting Started with Create React App
This project was bootstrapped with Create React App.
Available Scripts
In the project directory, you can run:
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.
npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.
npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
npm run build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


