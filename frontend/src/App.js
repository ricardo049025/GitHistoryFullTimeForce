import {Route, BrowserRouter as Router, Switch,Redirect ,Suspense} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import './App.css';
import Home from "./home/pages/Home";


function App() {
  return (
    <Router>
        <MainNavigation />
        <main>
          <Switch>
                <Route path="/" exact><Home /> </Route>
                <Redirect to="/"/>
              </Switch>
        </main>
    </Router>
  );
}

export default App;
