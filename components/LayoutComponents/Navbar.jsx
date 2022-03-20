import React from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
function Navbar() {
  return (
    <navbar className={styles.navbar}>
        <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width="50" height="50"></Image>
        </div>
        <ul className={styles.navlinks}>
        <li>Home</li>
        <li>Online Teaching</li>
        <li>Schedule</li>
        <li>Contact</li>
        </ul>
    </navbar>
  )
}

export default Navbar