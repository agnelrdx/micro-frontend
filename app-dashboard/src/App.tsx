import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { History } from 'history'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import Home from './Home'
import Stats from './Stats'

const generateClassName = createGenerateClassName({
  productionPrefix: 'db',
  disableGlobal: true,
  seed: 'db'
})

interface Props {
  history: History
}

const App: React.FC<Props> = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/dashboard/stats" component={Stats} />
          <Route path="/dashboard/home" component={Home} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
