import * as React from "react";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
