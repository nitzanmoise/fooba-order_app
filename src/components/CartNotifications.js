import React from "react";
import BeerIcon from "../icon-componenets/BeerIcon";
import Cart from "../pages/Cart";
import { Link } from "react-router-dom";

export default function CartNotifications(props) {
  return (
    <div className="CartNotifications">
      <Link to="/cart">
        <BeerIcon className="logo-dark"></BeerIcon>
        <h1 className="notifications">{props.notificationsCount}</h1>
        {/* <div
          className="logo-dark"
          style={{ backgroundImage: `url(${logo})` }}
        ></div> */}
      </Link>
    </div>
  );
}
