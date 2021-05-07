import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Button, CircularProgress } from '@material-ui/core';

import * as Actions from './TestActions.js';
import * as Selectors from './TestSelectors.js';

class TestPageContainer extends Component {

    componentDidMount() {
        const { match, getTest } = this.props;
        const id = match.params.id;
        getTest(id);
    }

    componentWillUnmount(){
        const { clearState } = this.props;
        clearState();
    }

    render () {
        const { history, test } = this.props;
        
        if(!test) return(<CircularProgress />);

        return (
            <div>
                <Button onClick={history.goBack}>Назад</Button>
                <h1>Test {test.id}</h1> 
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        test: Selectors.getTest(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTest: Actions.getTest(dispatch),
        clearState: Actions.clearState(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPageContainer);