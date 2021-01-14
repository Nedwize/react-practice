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
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="button" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
```

_We use **import** when using ES2015 Modules and **require** while using CommonJS modules_

- A React component is a class or a function which produces some HTML to display to the user (using JSX) and handles feedback coming from the user (using Event Handlers)

- HTML vs JSX

```html
HTML - <div style="background-color: red;"></div>
JSX - <div style={{ backgroundColor: 'red' }}></div>
```

- Can use variables in JSX with **{variableName}**
- Can call functions in JSX with **{functionName()}**

### Section 3 - (Communicating with props)

**Three main points to look at:**

- Component **Nesting**
- Component **Resusability**
- Component **Configuration**

- Linking CSS to React

```html
<link rel="stylesheet" href="url" />
```

#### Building a reusable Component

```javascript
import React from "react";

const CommentDetail = () => {
  return (
    <div class="comment">
      <a class="avatar">
        <img src="/" alt="Avatar" />
      </a>
      <div class="content">
        <a class="author" href="/">
          Matt
        </a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">How artistic!</div>
        <div class="actions">
          <a class="reply" href="/">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
```

- Each Component follows a naming convention of **FirstLast.js**
- Each Component exports itself by _export default FirstLast_
- The main index.js files import the said component by _import FirstLast from "./FirstLast"_
- Index.js should look something like this now:

```javascript
// Import react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

//  Create a react component
const App = () => {
  return (
    <div class="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
```

### Using Props

- Props are used to pass data from a parent component to a child component
- User to customize a Child Component
