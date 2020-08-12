import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Navbar />
            <h1>checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>login</h1>
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
