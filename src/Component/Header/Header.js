import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import HeaderList from "./HeaderList";

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!collapsed}
              aria-label="Toggle navigation"
              onClick={toggleCollapse}
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} alt="Logo" />
            </Link>

            <div
              className={`navbar-collapse ${collapsed ? "collapse" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderList LinkName="Mac" LinkUrl="/mac" />
                <HeaderList LinkName="iPhone" LinkUrl="/iphone" />
                <HeaderList LinkName="iPad" LinkUrl="/ipad" />
                <HeaderList LinkName="Watch" LinkUrl="/watch" />
                <HeaderList LinkName="TV" LinkUrl="/tv" />
                <HeaderList LinkName="Music" LinkUrl="/music" />
                <HeaderList LinkName="Support" LinkUrl="/support" />
                <HeaderList
                  LinkName={<img src={search} alt="Search" />}
                  LinkUrl="/search"
                />
                <HeaderList
                  LinkName={<img src={cart} alt="Cart" />}
                  LinkUrl="/cart"
                />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
