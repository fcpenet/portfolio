import styles from './floating-navigation.module.scss';
import { Link } from 'react-router-dom';

export function FloatingNavigation() {
  return (
    <div role="navigation">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default FloatingNavigation;
