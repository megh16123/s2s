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
        <ul className={styles.navlinks} id={showlinks ? "show": ""}>
        <li>Home</li>
        <li>Online Teaching</li>
        <li>Schedule</li>
        <li>Contact</li>
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