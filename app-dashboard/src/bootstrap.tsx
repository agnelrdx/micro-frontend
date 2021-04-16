import React from 'react'
import ReactDOM from 'react-dom'
import {
  createMemoryHistory,
  createBrowserHistory,
  History,
  LocationListener
} from 'history'
import './assets/index.css'
import App from './App'

interface IParams {
  defaultHistory: History
  initialPath?: string
  onNavigate?: LocationListener
}

const mount = (
  el: Element,
  { defaultHistory, onNavigate, initialPath = '' }: IParams
) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app-dashboard')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
