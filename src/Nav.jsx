import { Link, NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <NavLink to={'/'}>Home </NavLink>
          <NavLink to={'/colors'}>View All colors </NavLink>
          <NavLink to={'/colors/new'}>Add new color </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
