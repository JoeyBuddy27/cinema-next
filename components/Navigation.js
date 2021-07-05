import React from 'react'
import styles from "./nav.module.scss";
import Link from 'next/link'


function Navigation() {
    return (
        <div className={styles.navigation}>
           <nav>
               <Link href="#"><a>Home</a></Link>
           </nav>
        </div>
    )
}

export default Navigation
