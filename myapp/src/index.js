// Import react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";
// import ApprovalCard from "./ApprovalCard";
// import CommentDetail from "./CommentDetail";
import SeasonDisplay from "./SeasonDisplay";

//  Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      {/* <ApprovalCard>
        <CommentDetail author="Sam" />
      </ApprovalCard>
      <CommentDetail author="Sam" />
      <CommentDetail author="Jeff" />
      <CommentDetail author="Kumar" /> */}
      <SeasonDisplay />
    </div>
  );
};

//  Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
