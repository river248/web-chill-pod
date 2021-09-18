import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import ToTop from 'components/ToTop/ToTop'
import './App.scss'
import Home from "components/Home/Home"
import ProductSection from "components/ProductSection/ProductSection"
import ScrollToTop from "utils/ScrollToTop"

function App() {
  return (
    <Router>
      <div className="app">

        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navigation/>
              <Home/>
              <ProductSection/>
            </Route>
          </Switch>
        </ScrollToTop>

        <ToTop/>
      </div>
    </Router>
  )
}

export default App
