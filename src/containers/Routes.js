import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import EventPage from 'pages/event'
import AboutPage from 'pages/about'
import NotFoundPage from 'pages/notFound'

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/program" component={ProgramPage} />
    <Route path="/event/:event" component={EventPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/tickets" component={() =>
      window.location.replace(`https://ch.tudelft.nl/events/e6ad556f-4fd2-4fb5-b343-32651a1aca40/`)} />
    <Route path='/history' component={() =>
      window.location.replace(`https://symposium.ch.tudelft.nl/2017/`)} />
    <Route component={NotFoundPage} />
  </Switch>
)
