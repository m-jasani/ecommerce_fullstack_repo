import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./Nav.module.css";

const nav = ({ uid }) => {
  useEffect(() => {
    console.log("uid == >", uid);
  }, []);
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/Home" legacyBehavior>
            <a className={`${styles.navLink}`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href={`/cart/${uid}`} legacyBehavior>
            <a className={`${styles.navLink} `}>Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/wishlist" legacyBehavior>
            <a className={`${styles.navLink} `}>Wishlist</a>
          </Link>
        </li>
        <li>
          <Link href="/order" legacyBehavior>
            <a className={`${styles.navLink} `}>Order</a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a className={`${styles.navLink} `}>Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
