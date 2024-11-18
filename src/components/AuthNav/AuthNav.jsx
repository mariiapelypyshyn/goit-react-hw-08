import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from "clsx";

const linkClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
 const AuthNav = () => {
  return (
    <div>
      <NavLink className={linkClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClasses} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;