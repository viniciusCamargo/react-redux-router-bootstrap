import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Components from './reducers'


const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()
  middlewares.push(logger)
}

const middleware = applyMiddleware(...middlewares)

const configureStore = () => {
  const store = createStore(
    Components,
    compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : r => r
    )
  )

  return store
}

export default configureStore
