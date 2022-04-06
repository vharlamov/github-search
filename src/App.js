import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert'
import { NavBar } from './components/NavBar'
import { AlertState } from './context/alert/AlertState'
import { GithubState } from './context/github/GithubState'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { Profile } from './pages/Profile'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
        <NavBar />
          <div className='container pt-4'>
            <Alert alert={{text: 'Test alert', type: 'success'}}/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={Info} />
              <Route path='/profile/:name' component={Profile} />
              <Redirect to='/' />
            </Switch>

          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
