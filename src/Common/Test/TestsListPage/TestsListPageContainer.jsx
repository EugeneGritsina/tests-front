import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as Actions from './Actions.js';
import * as Selectors from './Selectors.js';

const columns = [
    { field: 'name', headerName: 'Название теста', width: 500 },
    { 
      field: 'creationDate', 
      headerName: 'Дата создания', 
      width: 200,
      valueGetter: (params) => {
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        };
        return new Date(params.value).toLocaleString("ru", options)},
    },
    { field: 'subjectName', headerName: 'Предмет', width: 400 },
  ];  


class TestListPageContainer extends Component {
  componentDidMount() {
    const { getTests } = this.props;
    getTests();
  }

  redirectToSelectedTest = (id) => {
    const { location, history } = this.props;
    history.push(`${location.pathname}/${id}`);
  }

  render() {
    const { tests } = this.props;

    if(!tests.length) {
      return(<CircularProgress />);
    } else {
      return (
        <div style={{ height: 700, width: 1300 }}>
            <DataGrid 
              rows={tests} 
              columns={columns} 
              pageSize={20}
              disableSelectionOnClick
              onRowClick={(event)=>{ this.redirectToSelectedTest(event.id) }}
            />
        </div>
      );
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    tests: Selectors.getTests(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTests: Actions.getTests(dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestListPageContainer));