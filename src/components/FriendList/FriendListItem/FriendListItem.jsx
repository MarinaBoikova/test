import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={s.itemFriend} key={id}>
        <span className={isOnline ? s.status : s.statusOff}></span>
        <img
          className={s.avatarFriend}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={s.friendName}>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendListItem;
