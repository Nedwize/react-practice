// Import react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";


//  Create a react component
const App = () => {

  return (
    <div class="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" />
      </ApprovalCard> 
      <CommentDetail author="Sam" />
      <CommentDetail author="Jeff" />
      <CommentDetail author="Kumar" />
    </div>
  )
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));