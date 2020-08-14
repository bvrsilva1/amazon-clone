import React, { useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './state/StateProvider'
import { auth } from './firebase/firebase'

function App() {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) dispatch({ type: 'SET_USER', user: authUser })
      else {
        dispatch({ type: 'SET_USER', user: null })
        history.push('/login')
      }
    })
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
