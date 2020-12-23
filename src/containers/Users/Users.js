import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
class Users extends Component {
  search = this.props.location.search.split('=')[1];
  state = {
    users: [],
    loading: false,
  };
  render() {
    const users = this.state.users.map((user) => {
      return (
        <Link
          key={user.login}
          style={{ textDecoration: 'none' }}
          to={{
            pathname: `/user/${user.login}`,
          }}
        >
          <UserItem {...user} />
        </Link>
      );
    });
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className={classes.Cover}>
        <div className={classes.Users}>{users}</div>
      </div>
    );
  }
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${this.search}`
      );
      const users = res['data']['items'];
      this.setState({ loading: false, users: users });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  }
}

export default Users;
