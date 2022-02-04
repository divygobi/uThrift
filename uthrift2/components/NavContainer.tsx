import React, { Children } from 'react';
import styles from '../styles/Nav.module.css'

function NavContainer(props: any) {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    {props.children}
                </div>
            </nav>
        </>
    )
}


export default NavContainer;
