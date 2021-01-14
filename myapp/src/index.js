// Import react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";

//  Create a react component
const App = () => {
    const buttonText = {
        text: 'Click Me'
    };

  return (
      <div>
          <label className="label" for="name">
              Enter Name:
          </label>
          <input id="name" type="button" />
          <button style={{ backgroundColor: 'blue', color: 'white'}}>
              {buttonText.text}
          </button>
      </div>
  )
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));