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
  )
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));