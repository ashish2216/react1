import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Page0 = lazy(() => import("./page0/Page0"));
const Page1 = lazy(() => import("./page1/Page1"));
const Page2 = lazy(() => import("./page2/Page2"));
const Page3 = lazy(() => import("./page3/page3"));
const Page4 = lazy(() => import("./page4/page4"));
const Page5 = lazy(() => import("./page5/Page5"));
const Page6 = lazy(() => import("./page6/page6"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Switch>
              <Route exact path="/" component={Page0} />
              <Route exact path="/page1" component={Page1} />
              <Route exact path="/page2" component={Page2} />
              <Route exact path="/page3" component={Page3} />
              <Route exact path="/page4" component={Page4} />
              <Route exact path="/page5" component={Page5} />
              <Route exact path="/page6" component={Page6} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
