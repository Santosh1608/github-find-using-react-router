import React from 'react';
import classes from './UserData.module.css';
const UserData = (props) => {
  return (
    <div className={classes.UserData}>
      <div className={classes.Img}>
        <img src={props.avatar_url} alt='NOT FOUND' />
      </div>
      <div className={classes.Data}>
        <h2>NAME: {props.name}</h2>
        <p>BIO:{props.bio ? props.bio : 'NOT FOUND'}</p>
        <p>COMPANY:{props.company ? props.company : 'NOT FOUND'}</p>
        <a href='#' className={classes.A}>
          Followers <span>{props.followers}</span>
        </a>
        <a href='#' className={classes.A}>
          Following <span>{props.following}</span>
        </a>
        <a href='#' className={classes.A}>
          Gists <span>{props.public_gists}</span>
        </a>
        <a href='#' className={classes.A}>
          Repos <span>{props.public_repos}</span>
        </a>
        <a
          style={{ display: props.display }}
          className={classes.Repos}
          onClick={props.clicked}
        >
          GET REPOS
        </a>
      </div>
    </div>
  );
};

export default UserData;
