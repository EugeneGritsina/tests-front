import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core/';

import './App.css';
import TestListPage from './Common/Test/TestsListPage/TestsListPageContainer';
import TestPage from './Common/Test/TestPage/TestPageContainer.jsx';
import LoginPage from './Common/LoginPage/LoginPage';

const useStyles = makeStyles({
  header: {
      color: "red"
  },
});

const isHeaderToolbarMustBeShowed = () => {
  debugger;
  if (!window.location.pathname)
    return false;
  else 
    return true;
}

function App() {
  const styles = useStyles();

  return (
    <Router>
      <div className="App">
        { isHeaderToolbarMustBeShowed() ?
        <AppBar position="static">
          <Toolbar>
            <Typography className={styles.header}>Белорусский государственный университет</Typography>          
            <Link to="/tests">Список тестов</Link>
            <Link to="/">Выйти</Link>
          </Toolbar>
        </AppBar> 
        : null }
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/tests" exact component={TestListPage} />
          <Route path="/tests/:id" component={TestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
