import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from '@material-ui/core/';

import TestListPage from './Common/Test/TestsListPage/TestsListPageContainer';
import TestPage from './Common/Test/TestPage/TestPageContainer.jsx';

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
          <Route path="/tests" exact component={TestListPage} />
          <Route path="/tests/:id" component={TestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
