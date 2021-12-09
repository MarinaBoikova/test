import React from "react";
import PropTypes from "prop-types";
import s from "./ProfileStyles.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div className={s.profile}>
        <div className={s.description}>
          <img className={s.avatar} src={avatar} alt="User avatar" />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.singleStatItem}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.singleStatItem}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={s.singleStatItem}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
