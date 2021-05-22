import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link, useHistory} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push("/login");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionsLineOne">
              {user ? `Hello ${user.email}` : "Hello User"}
            </span>
            <span className="header__optionsLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionsLineOne">Returns</span>
          <span className="header__optionsLineTwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div classname="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionsLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
