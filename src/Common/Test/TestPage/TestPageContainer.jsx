import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Typography, Divider, Paper, CircularProgress } from '@material-ui/core';

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
            <>
                <Button onClick={history.goBack}>Назад</Button>
                <Paper elevation={3}>
                    <h1>Название теста: {test.name}</h1>
                    <Divider />
                    <Typography>Предмет: {test.subjectDTO.name}</Typography>
                    <Divider /> 
                    <Typography>Количество вопросов, отображаемое студенту: {test.questionsAmount}</Typography>
                    <Divider /> 
                    <Typography>Время прохождения теста: {test.estimatedTime ? test.estimatedTime : "Не задано"}</Typography>
                    <Divider /> 
                    <Typography>Доступ к тесту: {test.isOpen ? "Открыт" : "Закрыт"}</Typography>
                    <Divider /> 
                </Paper>
                {test.questions.map(question => {
                    return (
                        <Paper elevation={3} key={question.id}>
                            <h2>Вопрос: {question.description}</h2>
                            <Divider /> 
                            <Typography>Тип вопроса: {question.questionType.type}</Typography>
                            <Divider /> 
                            <Typography>Количество баллов: {question.points}</Typography>
                            <Divider /> 
                        </Paper>
                    )
                })}
            </>
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