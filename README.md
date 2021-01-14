## React

### Section - 2 (JSX)

- Why **create-react-app**?

  - It installs various dependencies like Webpack and Babel on its own.

- Folder Structure

  - node_modules - all dependencies required to run react
  - src - all source code goes here
  - public - contains all the static files

- Steps
  - Delete all current files in src
  - touch index.js

```javascript
// Import react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";

//  Create a react component
const App = () => {
  return <div> Hi there! </div>;
};

//  Take component and show it on the screen
```

_We use **import** when using ES2015 Modules and **require** while using CommonJS modules_

- A React component is a class or a function which produces some HTML to display to the user (using JSX) and handles feedback coming from the user (using Event Handlers)

- HTML vs JSX

```html
HTML - <div style="background-color: red;"></div>
JSX - <div style={{ backgroundColor: 'red' }}></div>
```

Can use variables in JSX with **{variableName}**
Can call functions in JSX with **{functionName()}**
