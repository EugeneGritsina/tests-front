import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles } from '@material-ui/core/';

import TestListPage from './Common/Test/TestsListPage/TestsListPageContainer';
import TestPage from './Common/Test/TestPage/TestPageContainer.jsx';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
      color: "red"
  },
});

function App() {
  const styles = useStyles();

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography className={styles.header}>Белорусский государственный университет</Typography>          
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
