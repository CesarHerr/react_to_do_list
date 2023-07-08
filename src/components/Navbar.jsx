import { useState } from "react";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span> ⬇️ </span>
          </button>
          {dropdown && (
          <ul className={styles.dropdown}>
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
