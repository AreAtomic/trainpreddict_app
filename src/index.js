import React from 'react'
import ReactDOM from 'react-dom'
import './themes/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistStore } from 'reduxjs-toolkit-persist'
import { OnBoardingContextProvider } from './contexts/onboardingContext'

let persistor = persistStore(store)

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <OnBoardingContextProvider>
                        <App />
                    </OnBoardingContextProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
