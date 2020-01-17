import * as React from "react";

export const ContactItem = ({ avatarUrl, name, phone,title }) => {
  return (
    <li className="item">
      <img src={avatarUrl} className="ui mini rounded image" alt="" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{title}</div>
        <div className="description">{phone}</div>
      </div>
    </li>
  );
};
