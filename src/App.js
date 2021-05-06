import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core/';

import TestListPage from './Common/Test/TestsListPage/TestsListPageContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>          
            <Link to="/tests">Список тестов</Link>
            <Link to="/">Выйти</Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/tests">
            <TestListPage />
          </Route>
          <Route path="/tests/:id">
            <TestListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
