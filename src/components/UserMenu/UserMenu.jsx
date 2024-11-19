import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectIsUser);

  const onLogout = () => {
    dispatch(logout());
  }
  return (
    <div className={css.wrapper}>
       <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={onLogout }>
        Logout
      </button>
    </div>
  )
}

export default UserMenu;


