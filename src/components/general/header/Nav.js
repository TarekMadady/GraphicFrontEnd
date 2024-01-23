import React from "react";
import { Link } from "react-router-dom";
import AccountSection from "./AccountSection";
import unLogo from './0095.png';
import othLogo from "./other.jpeg";
const Nav = () => {
  return (
    <>
      <img
        src={othLogo}
        className="img-fluid me-2"
        style={{ width: "80px", borderRadius: "50%" }}
        alt=""
      />
      <nav id="navbar" className="navbar order-last order-lg-0 w-auto me-auto ">
        <ul>
          <AccountSection />
          <li className="nav-item dropdown">
            <Link to="">من نحن</Link>
          </li>
          <li>
            <Link to="">تعليمات عامة</Link>
          </li>
          <li>
            <Link to="">تواصل معنا</Link>
          </li>
          <li>
            <Link to="/tracks">المديولات التعليمية</Link>
          </li>
          <li>
            <Link className="active" to="/">
              الرئيسية
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <img
        src={unLogo}
        className="img-fluid ms-2"
        style={{ width: "80px", borderRadius: "50%" }}
        alt=""
      />
    </>
  );
};

export default Nav;
