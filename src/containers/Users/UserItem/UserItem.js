import React from 'react';
import classes from './UserItem.module.css';
const UserItem = (props) => {
  return (
    <div className={classes.UserItem}>
      <div className={classes.Img}>
        <div className={classes.Default}>
          <img src={props.avatar_url} alt='NOT FOUND' />
        </div>
      </div>
      <h4>{props.login}</h4>
    </div>
  );
};

export default UserItem;
