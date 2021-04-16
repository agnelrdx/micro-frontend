import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import Blog from './Blog'
import Home from './Home'

const generateClassName = createGenerateClassName({
  productionPrefix: 'hm',
  disableGlobal: true,
  seed: 'hm'
})

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}
