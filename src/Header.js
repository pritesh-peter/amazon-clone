import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();

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
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionsLineOne">Hello Guest</span>
            <span className="header__optionsLineTwo">Sign In</span>
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
