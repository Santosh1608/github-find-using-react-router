import React from 'react';
import classes from './UserRepo.module.css';
const UserRepo = (props) => {
  return (
    <div className={classes.UserRepo}>
      <h3>{props.name}</h3>
      <a className={classes.A} href='#'>
        Forks <span>{props.forks_count}</span>
      </a>
      <a className={classes.A} href='#'>
        Issues <span>{props.open_issues_count}</span>
      </a>
    </div>
  );
};

export default UserRepo;
