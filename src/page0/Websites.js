import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function websites() {
  return (
    <>
      <div className="webslink">
        <h3>Welcome To Atul's Websites</h3>
        <ol>
          <Link to="/page1">
            <li>Page1</li>
          </Link>
          <Link to="/page2">
            <li>Page2</li>
          </Link>
          <Link to="/page3">
            <li>Page3</li>
          </Link>
          <Link to="/page4">
            <li>Page4</li>
          </Link>
          <Link to="/page5">
            <li>Page5</li>
          </Link>
          <Link to="/page6">
            <li>Page6</li>
          </Link>
        </ol>
      </div>
    </>
  );
}
export default websites;
