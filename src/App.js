import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles, Typography, Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import TestListPage from './Pages/Test/TestsListPage/TestsListPageContainer';
import TestPage from './Pages/Test/TestPage/TestPageContainer.jsx';
import LoginPage from './Pages/LoginPage/LoginPage';
import * as SharedActions from './redux/SharedActions.js';
import * as SharedSelectors from './redux/SharedSelectors.js';

const useStyles = makeStyles({
  header: {
      color: "red"
  },
});


function App() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const isHeaderShowed = useSelector(state => SharedSelectors.getIsHeaderShowed(state))

  return (
    <Router>
      <div className="App">
        { isHeaderShowed ? 
        <AppBar position="static">
          <Toolbar>
            <Typography className={styles.header}>Белорусский государственный университет</Typography>          
            <Link to="/tests">Список тестов</Link>
            <Button onClick={() => dispatch(SharedActions.hideHeader())}><Link to="/">Выйти</Link></Button>
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
