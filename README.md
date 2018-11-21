# Restaurant Finder
### Instructions
#### `npm install` or `yarn install`
Installs all the packages/dependencies of the project
#### `npm start` or `yarn start`
Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#### `npm test` or `yarn test`
Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.
#### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
### Design outline
![alt text](https://github.com/AquiburRKhan/restaurantfinder/blob/master/images/UI-design.png?raw=true)
### Architecture
Currently the project contains a simple components folder where the components are held. If given more time or if I turned this to a bigger project I would follow [Fractal folder structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).
### Technical choices
 * Axios - Promise based HTTP client for the browser which is very lightweight and easy to use.
 * Google-map-react - Google map library for react that allows rendering components as markers which allows us to put custom markers in google map
 * Node-sass - For the project to compile and bundle scss files when using SASS
 * React-bootstrap - Helps make the project be more responsive
 * Enzyme - Helps traverse the react components to be able to test components easily
### Further Improvements in future
 * Write more tests.
 * Have markers pointing to specific restaurant in google map.
 * Expand the project following the Fractal folder structure.
 * Make the UI more beautiful and attractive
