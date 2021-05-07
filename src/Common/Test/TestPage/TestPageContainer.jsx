import React from 'react';
import {Button} from '@material-ui/core';

const TestPageContainer = (props) => {
    const { match, history } = props;
    const id = match.params.id;

    const goBackward = () => {
        history.goBack();
    }

    return (
        <div>
            <Button onClick={goBackward}>Назад</Button>
            <h1>Test {id}</h1> 
        </div>
    );
}

export default TestPageContainer;