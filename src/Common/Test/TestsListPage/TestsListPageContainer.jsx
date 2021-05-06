import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';

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

  render() {
    const { tests } = this.props;
    return (
      <div style={{ height: 700, width: 1200 }}>
          <DataGrid rows={tests} columns={columns} pageSize={20} />
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(TestListPageContainer);