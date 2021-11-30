import "./Left-navbar.css";
import { NavLink, Link } from "react-router-dom";

// Impoerting Images;
import hamburgLogo from "../../../../Assets/Images/habmurger-logo.png";
import youtubeLogo from "../../../../Assets/Images/youtube-logo.svg";
import youtubeSentence from "../../../../Assets/Images/yutube-sentence.svg";
import gusie from "../../../../Assets/Images/gussie.png";
import nora from "../../../../Assets/Images/nora.png";
import belle from "../../../../Assets/Images/belle.png";
import eunice from "../../../../Assets/Images/eunice.png";
import emma from "../../../../Assets/Images/emma.png";
import leah from "../../../../Assets/Images/leah.png";

function LeftNavbar() {
  return (
    <div className="p-4">
      <div className="left-top d-flex align-items-center justify-content-between">
        <div className="hamburger-logo">
          <button className="btn p-0" type="button">
            <img
              className="img-responsive pb-1"
              src={hamburgLogo}
              alt="hamburger Logo"
              width="20"
              height="17"
            />
          </button>
        </div>
        <div className="youtube ms-2">
          <img
            className="me-2 img-responsive"
            src={youtubeLogo}
            alt="youtube Logo"
            width="37"
            height="25"
          />
          <img
            className="img-responsive"
            src={youtubeSentence}
            alt="youtube Logo"
            width="75"
            height="23"
          />
        </div>
      </div>
      <ul className="navlik-list list-unstyled mt-4">
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink home-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink trending-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Trending
          </NavLink>
        </li>
        <li className="navlik-item mb-5">
          <NavLink
            className="navlink subscriptions-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Subscriptions
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink library-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Library
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink history-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            History
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink watch-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Watch later
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink favourites-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Favourites
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink liked-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Liked videos
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink music-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Music
          </NavLink>
        </li>
        <li className="navlik-item mb-3">
          <NavLink
            className="navlink games-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Games
          </NavLink>
        </li>
        <li className="navlik-item pb-4">
          <NavLink
            className="navlink show-navlik text-decoration-none"
            activeClassName="active-Navlink"
            to="/"
          >
            Show more
          </NavLink>
        </li>
      </ul>
      <h3 className="h3 subscriptions text-light mt-3 mb-4">Subscriptions</h3>
      <ul className="subscriptions-list list-unstyled pb-5">
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={gusie}
              alt="gusie img"
              width="26"
              height="26"
            />
            Gussie Singleton
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={nora}
              alt="nora img"
              width="26"
              height="26"
            />
            Nora Francis
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={belle}
              alt="belle img"
              width="26"
              height="26"
            />
            Belle Briggs
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={eunice}
              alt="Eunice Cortez img"
              width="26"
              height="26"
            />
            Eunice Cortez
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={emma}
              alt="Emma Hanson img"
              width="26"
              height="26"
            />
            Emma Hanson
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={leah}
              alt="Leah img"
              width="26"
              height="26"
            />
            Leah Berry
          </Link>
        </li>
        <li className="subscriptions-item d-flex mb-4">
          <Link className="subscriptors text-decoration-none text-light" to="/">
            <img
              className="subscriptions-img me-3"
              src={gusie}
              alt="gusie img"
              width="26"
              height="26"
            />
            Gussie Singleton
          </Link>
        </li>
      </ul>
      <Link className="setting text-decoration-none mt-5" to="/">
        Setting
      </Link>
    </div>
  );
}

export default LeftNavbar;
