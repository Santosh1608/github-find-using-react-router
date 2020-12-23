import React, { Component } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import UserRepo from './UserRepo/UserRepo';
import axios from 'axios';
import classes from './UserRepos.module.css';
class UserRepos extends Component {
  state = {
    repos: [],
    loading: false,
  };
  render() {
    let repos = <Spinner />;
    if (!this.state.loading || this.state.repos.length !== 0) {
      repos = this.state.repos.map((repo) => {
        return <UserRepo key={repo.id} {...repo} />;
      });
    }
    return (
      <div id='repos' className={classes.UserRepos}>
        {repos}
      </div>
    );
  }
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const repos = await axios.get(
        `https://api.github.com/users/${this.props.userName}/repos?per_page=5&sort=created:asc`
      );
      this.setState({ repos: repos.data, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  }
}

export default UserRepos;
