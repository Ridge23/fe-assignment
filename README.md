# Test assignment
## Introduction

This is an implementation of the following test assignment:

Develop a React SPA application for managing promo codes.
Please use this layout https://www.figma.com/file/6J7oriX3K4zPLF2lrhfIvJ/front-end-test-prototype​ and include the following functionality:

- Ability to filter services by name.
- Ability to reset filters.
- Ability to copy promo code to the clipboard.
- Ability to change service status to “Activated” by clicking on the “Activate bonus” button.
- Please mock the API.
- The project should be built with webpack and include a README.md with instructions on how to run it locally.


Answers for questions from assignment pdf are in the end of this readme.

## Setup

The application consists of the two parts: frontend and mock server.
The procedure to run the application locally is:

- checkout this repository;
- run ``npm install``
- run ``npm run start-mockserver``
- run ``npm start``
- make a copy of ``.env.dist`` as ``.env``. No need to change contents, unless you would like to use non-9001 port for mock server; If needed, change mockserver.js file to hold another port;

## Description

As assignment description clearly states that app should be built using webpack, I decided not to use CRA (create-react-app).
So, there was installed:

- react 16.12;
- react-dom 16.12;

as a basis for application.

To build application:

- webpack;
- webpack-cli;
- html-webpack-plugin;
- ts-loader (as I wanted to use TypeScript with webpack);
- css-loader, style-loader, sass-loader, svg-url-loader (to load SASS stylesheets and SVG files)

Application-specific packages:

- redux (for state, hate it when devs fetch data and manage it without store);
- redux-thunk (for async actions in redux);
- redux-devtools-extension (for dev purposes);
- react-router (actually there were no need for router except for the fact that there is some kind of sidemenu on the design. So I decided it will be fun to add react-router here);
- dotenv (to hold configuration);
- jest, enzyme, jsdom, jsdom-global, ts-jest for testing
- node-sass (I could use styled-components for the purpose of styling, but decided to play a bit with sass config in webpack. 
Also used BEM for styling.);


## Tests

I have covered application with tests partially, to demonstrate knowledge.
There are snapshot tests for components and tests for reducer.
To run tests, just run ``npm t``

## Answers to questions

- How do you document your code?

``Usually don't need to, as I write self-documented code. If the code is hard to understand, I add comments in the code in specific places. Please check services folder for examples. And actions/Services.ts file For purposes of api documentation, I usually use swagger.``

- What are your thoughts on unit testing?

``Necessary to have, usually not implemented fully in projects.``

- What Design Patterns you have used in your projects?

``Factory, Strategy, Proxy, Singleton, Builder, Revealing Constructor, Decorator, Facade``

- What do you think about Typescript?

``Prefer to use it, as it adds strict types and helps develop (VSCode autocomplete works perfectly with it)``

- What are the most important performance issues in React web applications?

``Bundle size is usually the main problem, as React itself with webpack tree-shaking is quite optimized. However, when developing React apps, we need to stick to some, lets say, advises: avoiding inline function definitions, use immutable objects, check for rerenders and do not rerender if not needed (previously in React - shouldComponentUpdate), use throttling and debouncing, always use keys for components where needed, memoization where possible), use code-splitting``


