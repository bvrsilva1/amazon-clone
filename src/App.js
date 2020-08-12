import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <h1>checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>login</h1>
          </Route>
          <Route path='/'>
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
