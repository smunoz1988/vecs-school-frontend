import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  const activeClassName = 'underline';
  return (
    <nav>
      <a href="#/">
        <h1 class="font_Caveat">VECS SCHOOL</h1>
      </a>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Reserve"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Reservations"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            My Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddCourse"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Add Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/DeleteCourse"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Delete Course
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;