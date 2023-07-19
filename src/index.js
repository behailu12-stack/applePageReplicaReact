import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);







// ***********************************//
// What's the purpose of root element in react
// ***********************************//
// In React, the term “root” typically refers to the root element of a React application. It is the top-level component that serves as the entry point for rendering the entire application. In most React applications, there is a single root element, usually an HTML element such as <div>, that acts as the container for the entire React component hierarchy. This root element is where React renders the application’s components and manages their updates.

// To render a React application, you typically use the ReactDOM.render() method, which takes two arguments: the root component to render and the target root element in the HTML document where the component should be rendered. For example:

// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// In the above code, the <App /> component is rendered and mounted into the root element with the id “root” in the HTML document.

// By convention, developers often create a <div> element with the id “root” in their HTML file as the designated root element for the React application. This is where the React component tree will be injected and rendered.

// Overall, the root element in React represents the top-level container element where the React component hierarchy is rendered and managed.
// ***********************************//
// Why we should use the four packages of fontawesome
// ***********************************//
// 1. "@fortawesome/fontawesome-free": "^6.4.0":- This package provides a collection of font icons from Font Awesome. It includes both solid and regular style icons. With this package, you can use font icons in your application by referencing the icon classes provided by Font Awesome.

// 2. "@fortawesome/fontawesome-svg-core": "^6.4.0":- This package is the core package for working with Font Awesome icons in SVG format. It provides utility functions and components for working with SVG icons, such as transforming and manipulating them.

// 3. "@fortawesome/free-solid-svg-icons": "^6.4.0":- This package specifically provides a collection of solid style SVG icons from Font Awesome. These icons are in SVG format and can be used in your application to represent various UI elements or actions.

// 4. "@fortawesome/react-fontawesome": "^0.2.0":- This package is a React wrapper for using Font Awesome icons in a React application. It provides React components that make it easier to use Font Awesome icons within your React components. It allows you to import and use icons from Font Awesome using JSX syntax.

// In summary, "@fortawesome/fontawesome-free" provides a collection of font icons, "@fortawesome/fontawesome-svg-core" is the core package for working with SVG icons, "@fortawesome/free-solid-svg-icons" provides solid style SVG icons, and "@fortawesome/react-fontawesome" is a React wrapper for using Font Awesome icons in React components. These packages work together to enable the usage of Font Awesome icons in your React application.
// ***********************************//
// The purpose of importing:- import "@fortawesome/fontawesome-free/css/all.css";
// ***********************************//
// After importing the `@fortawesome/fontawesome-free/css/all.css` file in my `index.js`, the necessary styles for Font Awesome icons will be available globally in your application. This means I can use the icon classes directly in my CSS files.

// Using the icon classes directly in my CSS file gives me flexibility in styling and positioning the icons within my application's stylesheets.