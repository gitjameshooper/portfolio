import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Remote from './components/remote/remote.component';
import Channel1 from './components/channels/channel-1/channel-1.component';
import Channel2 from './components/channels/channel-2/channel-2.component';
import Channel3 from './components/channels/channel-3/channel-3.component';
import Channel4 from './components/channels/channel-4/channel-4.component';
import Channel5 from './components/channels/channel-5/channel-5.component';
import Channel6 from './components/channels/channel-6/channel-6.component';
import Channel7 from './components/channels/channel-7/channel-7.component';
import Channel8 from './components/channels/channel-8/channel-8.component';
import Channel9 from './components/channels/channel-9/channel-9.component';
import Netflix from './components/channels/netflix/netflix.component';


import Container from '@material-ui/core/Container';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
       
          <Container component="main" maxWidth="lg">
          <Switch>
             <Route path="/" exact component={Channel1} />
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
          </Container>
             <Remote  />
        </Router>
    </div>
  );
}


export default App;