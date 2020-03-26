import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePageContainer from '../Containers/HomePageContainer'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePageContainer} />
      </Switch>
    </Router>
  )
}

export default Routes
