import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
    <nav >
      <ul>
        <Link href='/'><a><li>HOME</li></a></Link>
        <Link href='/about'><a><li>ABOUT</li></a></Link>
        <Link href='/blog'><a><li>BLOG</li></a></Link>
        <Link href='/contact'><a><li>CONTACT</li></a></Link>

      </ul>
    </nav>
    </div>
  )
}

export default Navbar