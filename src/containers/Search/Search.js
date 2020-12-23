import React, { Component } from 'react';
import classes from './Search.module.css';
class Search extends Component {
  state = {
    text: '',
  };
  changed = (e) => {
    this.setState({ text: e.target.value });
  };
  clicked = () => {
    this.props.history.push({
      pathname: '/users',
      search: `?search=${encodeURIComponent(this.state.text)}`,
    });
  };
  render() {
    return (
      <div className={classes.Landingpage}>
        <div className={classes.SearchWrapper}>
          <div className={classes.Search}>
            <h1>FIND USERS</h1>
            <input
              onChange={this.changed}
              type='text'
              placeholder='Search for users'
              spellCheck='false'
            />
            <button onClick={this.clicked}>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
