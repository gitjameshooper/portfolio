import React from "react";
import Store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Remote from "./components/remote/remote.component";
import Channel0 from "./components/channels/channel-0/channel-0.component";
import Channel1 from "./components/channels/channel-1/channel-1.component";
import Channel2 from "./components/channels/channel-2/channel-2.component";
import Channel3 from "./components/channels/channel-3/channel-3.component";
import Channel4 from "./components/channels/channel-4/channel-4.component";
import Channel5 from "./components/channels/channel-5/channel-5.component";
import Channel6 from "./components/channels/channel-6/channel-6.component";
import Channel7 from "./components/channels/channel-7/channel-7.component";
import Channel8 from "./components/channels/channel-8/channel-8.component";
import Channel9 from "./components/channels/channel-9/channel-9.component";
import Netflix from "./components/channels/netflix/netflix.component";
import PreloadImages from "./components/preload-images/preload-images.component";
import Guide from "./components/guide/guide.component";
import Logo from "./components/logo/logo.component";
import lgLogo from "./assets/img/logos/lg.png";
import "./App.scss";

function App() {
  return (
    <Store>
      <PreloadImages />
      <div className="App">
        <Logo />
        <span className="on-off-light"></span>
        <img alt="LG Logo" className="lg-logo" src={lgLogo} />
        <div className="overflow-wrapper">
          <Router>
            <Guide />
            <Switch>
              <Route path="/" exact component={Channel1} />
              <Route path="/channel-0" exact component={Channel0} />
              <Route path="/channel-1" exact component={Channel1} />
              <Route path="/channel-2" exact component={Channel2} />
              <Route path="/channel-3" exact component={Channel3} />
              <Route path="/channel-4" exact component={Channel4} />
              <Route path="/channel-5" exact component={Channel5} />
              <Route path="/channel-6" exact component={Channel6} />
              <Route path="/channel-7" exact component={Channel7} />
              <Route path="/channel-8" exact component={Channel8} />
              <Route path="/channel-9" exact component={Channel9} />
              <Route path="/netflix" exact component={Netflix} />
            </Switch>
            <Remote />
          </Router>
        </div>
      </div>
    </Store>
  );
}

export default App;
