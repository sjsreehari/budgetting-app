import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-deep-teal text-warm-beige p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">RupeeWise</span>
        </div>
        <ul className="flex space-x-8">
          
          <li>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold text-warm-beige' : 'hover:underline text-warm-beige'
              }
            >
              Budget
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold text-warm-beige' : 'hover:underline text-warm-beige'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;