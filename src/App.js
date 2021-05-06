import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import TestListPage from './Common/Test/TestsListPage/TestsListPageContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/tests">Список тестов</Link>
            </Typography>
            <Button color="inherit"><Link to="/">Выйти</Link></Button>
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
