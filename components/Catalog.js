import React from 'react';
import { connect } from 'react-redux';
import List from './List';

class Catalog extends React.Component {

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (match.params.type) {
      dispatch({
        type: 'FILTER_BY_TYPE',
        bytype: match.params.type
      })
    }
  }

  render() {
    const { ui, dispatch } = this.props;

    const types = ['any','normal','electric','fire','water','grass','bug','fight','psychic','fairy','flying'];

    const renderType = (type) => <li key={type} className={`${ ui.filterType === type || ui.filterType === type ? `${type} selected` : '' }`} onClick={() => {
      dispatch({
        type: 'FILTER_BY_TYPE',
        bytype: type
      })
    }}>{type}</li>;
    
    return (
      <div>
        <div className="filterInput">
          <input onChange={(e) => {
            dispatch({
              type: 'FILTER_BY_TEXT',
              bytext: e.target.value
            })
          }} placeholder="Gotta Catch'em all" />
        </div>

        <ul className="typeList">
          { types.map( renderType ) }
        </ul>

        <List />
      </div>
    );
  }
}

export default connect(state => state) (Catalog);