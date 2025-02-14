import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import Router from './routes'

import AuthProvider from './auth/JwtContext.jsx'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Toaster />
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </AuthProvider>
    </ReduxProvider>
  )
}

export default App
