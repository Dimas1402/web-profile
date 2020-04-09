import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePageContainer from '../Containers/HomePageContainer'
import Profile from '../Components/Profile/Profile'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePageContainer} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  )
}

export default Routes
