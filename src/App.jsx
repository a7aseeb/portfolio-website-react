import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PortfolioMain from './components/portfolio-main/PortfolioMain'



const App = () => {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <PortfolioMain />
        </Route>
      </Switch>
      </>
    </Router>
  )
}

export default App