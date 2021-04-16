import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'
import './assets/index.css'

const mount = (el, { defaultHistory, onNavigate, initialPath = '' }) => {
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
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app-home')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
