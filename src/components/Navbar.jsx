import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  const activeClassName = 'underline';
  return (
    <nav>
      <a href="#/">
        <h1 className="font_Caveat">VECS SCHOOL</h1>
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
            to="/reservations/:id"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            My Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/new"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Add Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/delete-course"
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