import React from 'react';
import styles from '../styles/Home.module.css'
function Layout(props: any) {
    return <div className={styles.container}>
        <main className={styles.main}>
            {props.children}
        </main>
    </div>;
}

export default Layout;
