import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import Progress from './components/Progress'
import Header from './components/Header'

const Home = lazy(() => import('./components/HomeApp'))
const Dashboard = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
  disableGlobal: true,
  seed: 'co'
})

const history = createBrowserHistory()

export default () => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}
