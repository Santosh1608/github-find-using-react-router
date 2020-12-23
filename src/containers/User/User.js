import React, { Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';
import UserData from './UserData/UserData';
import classes from './User.module.css';
import { Route } from 'react-router-dom';
import UserRepos from './UserRepos/UserRepos';
class User extends Component {
  name = this.props.match.params.name;
  state = {
    user: {},
    loading: false,
    display: 'block',
  };
  clicked = () => {
    this.setState({ display: 'none' });
    this.props.history.replace(`${this.props.match.url}/repos`);
  };
  render() {
    let user = <Spinner />;
    if (!this.state.loading && Object.keys(user).length >= 0) {
      user = (
        <div className={classes.UserCover}>
          <UserData
            {...this.state.user}
            clicked={this.clicked}
            display={this.state.display}
          />
          <Route
            path={this.props.match.url + '/repos'}
            render={(props) => <UserRepos {...props} userName={this.name} />}
          />
        </div>
      );
    }
    return user;
  }
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const user = await axios.get(`https://api.github.com/users/${this.name}`);
      this.setState({ user: user.data, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  }
}

export default User;
