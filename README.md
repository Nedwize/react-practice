## React

### Section - 1 (JSX)

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

### Section 2 - (Communicating with props)

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
- Pass props in from the Parent component as follows:

```javascript
<CommentDetail author="Name" />
```

- An object containing these props will be passed to the Component function
- Catch the object data with **props.author** in the Component.js file

### Nested Components

- Components can be passed in other components as props

```javascript
<ApprovalCard>
  <CommentDetail author="Sam" />
</ApprovalCard>
```

- The component called **CommentDetail** is passed in **ApprovalCard** as a prop
- This can be accessed in **ApprovalCard** as follows:

```javascript
{
  props.children;
}
```

- Any JSX nested inside <ApprovalCard> can be accessed using **props.children**

### Section 3 - Class Based Components

Difference between **Class Based Components** and **Function Based Components**

| Functional Components           | Class Components                                                       |
| ------------------------------- | ---------------------------------------------------------------------- |
| Can produce JSX to show content | Can produce JSX to show content                                        |
| :no_entry_sign:                 | Can use the **Lifecycle Method** system to run codes at specific times |
| :no_entry_sign:                 | Can use the **state** system to update content on the screen           |

_Note: Functional components can now use Hooks to perform in the same way as Class Components_

- Which one to use? _Class or Functional Components?_

React Hooks have a very steep learning curve. The easier method is to: **Learn Class Components** --> **Learn Hooks** --> **Learn Redux**. Also almost every big organization uses both Class and Functional based components.

##### Rules of a Class Component

- Must be a Javascript Class
- Must extend React.Component or _import React, {Component} from 'react'_
- Must define render method that returns some JSX to render

```javascript
import React,{ Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      // Some JSX
    )
  }
}

export default ClassComponent;
```

### Section 4 - The State

##### Rules of State

- Only usable with a Class Component. _Can be used with hooks in functional components_
- State is a JS object that contains data which can be used while rendering a state
- **Updating** the state on a component causes components to **instantly render**
- State must be initialized when a component is created
- State can only be changed using the function **setState**

**Note:** The key to rerender a component is to change its state

##### Initializing state through Constructors

- Initialize a Constructor function
- Call Super with props as argument inside the constructor. _To make sure the Parent's Constructor function gets called, we call super()_

```javascript
import React,{ Component } from "react";

class ClassComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {data: null} // Initialized State

    this.setState = {date: 123} // State Updated
  }

  render() {
    return (
      // Some JSX
    )
  }
}

export default ClassComponent;
```

- To update the state, call the **setState** function with the new state object in the argument.

```javascript
this.setState({ latitude: data.coords.latitude });
```

##### Conditional Rendering

- You can chain if else statements inside the **render()** method and return the JSX inside the if-else

### Section 5 - The Lifecycle Method

| Component Lifecycle                |
| ---------------------------------- |
| Constructor Called                 |
| Component rendered                 |
| _Content is now visible_           |
| componentDidMount() is called      |
| _waiting for updates_              |
| componentDidUpdate() is called     |
| _wait till component is not shown_ |
| componentWillUnmount() is called   |

##### Application of Lifecycle Methods

- You can do data loading and API calls within both the **constructor** as well as the **componentDidMount()** method, but for standardization and clearer code, componentDidMount method is preferred
- There are other lifecycle methods such as _shouldComponentUpdate(), getDerivedStateFromProps() and getSnapshotBeforeUpdate()_ but they are rarely used

##### Alternate method for initialization of State

- The state can be initialized by writing this snippet in the class component

```javascript
state = { latitude: null, errorMessage: "" };
```

- This is equivalent to initializing the state within the constructor. Using this syntax, the constructor is not needed. Instead, it is compiled into a constructor when it goes through the Babel pipeline.
- **Passing down the state as props in a child component will force the child component to rerender too**

#### Default Props

```javascript
componentName.defaultProps = {
  message: "Loading!",
};
```

### Handling Events

- Pass a prop called **onChange={}** to the component or element you want to handle this event at
- Call a function within this prop and define it to handle this event
- Eg.

```javascript
class SearchBar extends Component {
  onInputChange(event) {
    // Function to handle this event
    console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" onChange={this.onInputChange}></input> // Pass this prop here
    );
  }
}
```

-**Different Events are going to be wired to different property names**

- More examples, _onClick()_, _onChange()_, _onSubmit()_

- **Alternate Handlers for events**

```javascript
<input type="text" onChange={(e) => { console.log(e.target.value) }}>
```

### Controlled VS Uncontrolled Events

> Controlled Component

```javascript
state = { term: "" };
render() {
    return (
      <input
        type="text"
        placeholder="Search for a term"
        value={this.state.term}
        onChange={(e) => this.setState({ term: e.target.value })}
      ></input>
    );
  }
```

> Uncontrolled Component

- See above example under **Handling Events**

**Why Controlled Components?**

_We do not prefer storing values in HTML elements. Storing data in React Components as states makes more sense. It also makes it easy to get the Realtime value of the field without traversing the DOM_

#### Communicating from Child to Parent

> We can pass data with prop functions from Child to Parent by passing down a reference of a Parent function down to the Child with props

See the onSubmit() function in App.js, PICS project for more details

#### Making API calls

> We can make Network requests with Axios or Fetch. Fetch is and inbuilt method. Axios is a third party package.

#### Referencing DOM inside ReactApp

> We can create Refs inside a Class Based Component to manipulate the DOM within the React App

Eg.

```javascript
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener("load", () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 20);
      this.setState({ spans });
    });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
```

**Note: Always remember to create a basic UI and Component Hierarchy**

### Section 6 - Hooks

> Hooks helps Functional Components the power of Class Components

| Functions       | Usage                                                   |
| --------------- | ------------------------------------------------------- |
| **useState()**  | Use _state_ in a Functional component                   |
| **useEffect()** | Can use **Lifecycle Methods** in a Functional Component |
| **useRef()**    | Lets us create refs like React.createRef()              |

_Hooks enable us to write reusable code in an easy way_

We can use a lot of predefined Hooks in React. Also Custom Hooks can be made to perform multiple jobs at the same time.

1. **useState() Hook**

> A state can be defined with this particular piece of code written below:

```javascript
const [name, setName] = useState(null);
```

Explanation: Here _name_ is a variable of state, _setName_ function is used to change that variable. Also, _null_ is passed as the initial value of this state.
name and setName are destructured out of the useState function Array.

_Note: The setter function rerenders the component_

Other Examples:

- const [counter, setCounter] = useState(1)
- const [color, setColor] = useState("black")

The contrast of useState() (Function Component) and this.state (Class Component) can be shown here.

| Process            | Class Components               | Functional Components |
| ------------------ | ------------------------------ | --------------------- |
| **Initialization** | state = { term: "" };          | useState("");         |
| **Reference**      | this.state.term;               | term;                 |
| **Updates**        | this.setState({ term: "Yo" }); | setTerm("Yo")         |

2. **useEffect() Hook**

> Allows to use Lifecycle methods in Functional Components

We can _configure_ code in one of the **3 scenarios**

- When the component is **rendered for the first time**
- When the component is **rendered for the first time and whenever it rerendered**
- When the component is **rendered for the first time and (whenever it is rerendered && some piece of data has changed)**

Usage of **useEffect()** - The _useEffect()_ function takes 2 arguments, a callback function and an array

```javascript
useEffect(() => {
  // Do something here
}, []);
```

The Second Argument -

- [] - At initial render
- ...nothing - Run at initial render and also after every rerender
- [data] - Run at initial render and also rerender if data has changed since last rerender

_Note: The use effect callback argument CANNOT be an async function_

So, instead of -

```javascript
useEffect(async () => {
  await axios.get(URL);
}, []);
```

Use -

```javascript
useEffect(() => {
  (async () => {
    await axios.get(URL);
  })();
}, []);
```

OR use .then Promises

### :warning: VERY IMPORTANT - Throttling API requests

> Sometimes API requests are tied to events that can place really often, to limit the number of API requests the app generates, we need to throttle them

Use a _setTimer()_ function to limit the API request to every 500ms or so

- The _setTimeout()_ function comes with an ID. You can call the _clearTimeout()_ function with that ID to cancel the execution of that particular _setTimeout()_

Note: Study about Event Handling

#### Custom Hooks

> They are used to write reusable code in a React Project

Custom hooks _always_ use at least one defined hook internally

### Section 7 - Redux

> Redux can be used to manage application state.

#### Redux Cycle

- Action Creator _(Person dropping off the form)_
- Action _(The Form)_
- Dispatch _(Form Receiver)_
- Reducers _(Departments)_
- State _(Compiled Department Data)_

#### Project Structure in React-Redux

```
project
│   README.md
│   index.js
│
└───actions
└───components
└───reducers
```

Named VS Default Exports
