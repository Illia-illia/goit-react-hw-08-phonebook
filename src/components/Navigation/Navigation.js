import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/tasks">Tasks</NavLink>
    </nav>
  );
};
