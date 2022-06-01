import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom navbar-light">
        <Link to="/">
          <img
            className="rounded logoImg"
            src="	https://www.fashos.com/pub/media/logo/stores/1/logo.png"
            alt="logo"
          />
        </Link>

        <div
          className="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto navInfo">
            <li className="nav-item">
              <p className="nav-name">NEW ARRIVALS</p>
            </li>
            <li className="nav-item">
              <p className="nav-name">WOMEN</p>
            </li>
            <li className="nav-item">
              <p className="nav-name">MEN</p>
            </li>
            <li className="nav-item">
              <p className="nav-name">KIDS</p>
            </li>
            <li className="nav-item">
              <p className="nav-name">BRANDS</p>
            </li>
            <li className="nav-item">
              <p className="nav-name">SALE</p>
            </li>
          </ul>
          <form className="form-inline d-inline-flex m-5 my-2 my-lg-0">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success mr-3 my-2 my-sm-0"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
        <Link to="/login">
          <button type="button " className="btn btn-link loginBtn">
            Login
          </button>
        </Link>
      </nav>
    </div>
  );
};
