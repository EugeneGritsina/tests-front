import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import TestListPage from './Pages/Test/TestsListPage/TestsListPageContainer';
import TestPage from './Pages/Test/TestPage/TestPageContainer.jsx';
import LoginPage from './Pages/LoginPage/LoginPage';
import TitleOfOrganization from './Components/TitleOfOrganization/TitleOfOrganization';
import * as SharedActions from './redux/SharedActions.js';
import * as SharedSelectors from './redux/SharedSelectors.js';

const useStyles = makeStyles({
  header: {
      background: "#08105A",
      height: '10vh',
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
        <AppBar position="static" className={styles.header}>
          <Toolbar>
          <TitleOfOrganization />
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
