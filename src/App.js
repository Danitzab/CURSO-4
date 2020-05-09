import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Public from './Pages/Public'
import Private from './Pages/Private'

const App = () => (
  <Router>
    <Switch>
        <Route exact path='/' component={Public} />
        <Route exact path='/privado' component={Private} />
    </Switch>
  </Router>
)

export default App;