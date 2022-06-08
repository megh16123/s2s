import React,{useState} from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
function Navbar() {
  const [showlinks,setShowLinks]=useState(false);
  return (
    <navbar className={styles.navbar} >
        <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width="50" height="50"></Image>
        </div>
        <ul className={styles.navlinks} id="show">
        <li>Home</li>
        <li>Classes</li>
        <li>About Us</li>
        <li>Contact Us</li>
        </ul>
        <div className={styles.burger} onClick={()=>setShowLinks(!showlinks)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
    </navbar>
  )
}

export default Navbar