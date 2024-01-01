"use client"
import styles from './shell2.module.css'
import Button from '../Button/button';
import ThemeToggle from '../ThemeToggle/themeToggle';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

type Props = {
    children: React.ReactNode
}

export default function Shell2({ children }: Props) {

    return (

        <div className={styles.top_container}>

            <nav className={styles.navbar_container}>
                <div className={styles.navbar_left_container}></div>
                <div className={styles.navbar_center_container}>
                    <div className={styles.navbar_center_left}>
                        <p className={styles.logo}>Liam Mahoney</p>
                    </div>
                    <div className={styles.navbar_center_center}/>
                    <div className={styles.navbar_center_right}>
                        <Button icon variant="ghost">
                            <LinkedinLogo size={16} weight="bold" />
                        </Button>
                        <Button icon variant="ghost"> 
                            <GithubLogo size={16} weight="bold" />
                        </Button>
                        <ThemeToggle variant="ghost" />
                    </div>
                </div>
                <div className={styles.navbar_right_container}></div>
            </nav>
            <main className={styles.content_container}>
                {children}
            </main>
        </div>
    )
}