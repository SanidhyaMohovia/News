import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Fav from './Pages/Fav';
import More from './Components/More';
const News = () => (
      <Router>
      <div>
            <Route exact path="/" component={Home} />
            <Route path="/fav" component={Fav} />
            <Route path="/more/:moreId" component={More} />
      </div>
      </Router>
    )




export default News;
