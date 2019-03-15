import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { filterByType, filterByName } from '../actions';

class Catalog extends Component {

  componentDidMount() {
    // match is router
    const { match, filterByType } = this.props;

    if (match.params.type) {
      /*
      dispatch({
        type: 'FILTER_BY_TYPE',
        bytype: match.params.type
      })
      */
      filterByType(match.params.type);
    }
  }

  render() {
    const { ui, filterByType, filterByName } = this.props;

    const types = ['any','normal','electric','fire','water','grass','bug','fight','psychic','fairy','flying'];

    const renderType = (type) => (
      <li
        key={type} 
        className={`${ ui.filterType === type || ui.filterType === type ? `${type} selected` : '' }`} 
        onClick={() => filterByType(type)}
      >
        {type}
      </li>
    );

    return (
      <Fragment>
        <div className="filterInput">
          <input onChange={(e) => {
            /*
            dispatch({
              type: 'FILTER_BY_NAME',
              byname: e.target.value
            })
            */
            filterByName(e.target.value);
          }} placeholder="Gotta Catch'em all" />
        </div>

        <ul className="typeList">
          { types.map( renderType ) }
        </ul>

        <List />
      </Fragment>
    );
  }
}

export default connect(
  state => state,
  {
    filterByType,
    filterByName,
  }
)(Catalog);