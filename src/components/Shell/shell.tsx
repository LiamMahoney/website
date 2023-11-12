"use client"
import { useState } from 'react';
import styles from './shell.module.css'
import Button from '../Button/button';
import ThemeToggle from '../ThemeToggle/themeToggle';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Squash as Hamburger } from 'hamburger-react';

type Props = {
    children: React.ReactNode
}

export default function Shell({ children }:Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleBurgerClick = (() => {
        setMobileOpen(!mobileOpen);
    });

    return (
        <div mobile-open={`${mobileOpen}`} className={styles.shellContainer}>
            <div className={styles.navbar}>
                <div className={styles.navbarRight}>
                    <span>Liam Mahoney</span>
                </div>
                <div className={styles.navbarCenter}>
                    <Button variant="ghost">Home</Button>
                    <Button variant="ghost">Blog</Button>
                </div>
                <div className={styles.navbarLeft}>
                    <span className={styles.desktopRight}>
                        {/* TODO: add links */}
                        <Button icon variant="ghost">
                            <LinkedinLogo size={16} weight="bold" />
                        </Button>
                        <Button icon variant="ghost"> 
                            <GithubLogo size={16} weight="bold" />
                        </Button>
                        <ThemeToggle variant="ghost" />
                    </span>
                    <span className={styles.mobileRight}>
                        <Hamburger 
                            size={20} 
                            toggle={handleBurgerClick}
                            toggled={mobileOpen}
                        />
                    </span>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.mobileLinkContainer}>
                    <Button variant="ghost" fullWidth size="xl">Home</Button>
                    <Button variant="ghost" fullWidth size="xl">Blog</Button>
                </div>
                <div className={styles.mobileIconContainer}>
                    {/* TODO: add links */}
                    <Button icon variant="ghost" size="lg">
                        <LinkedinLogo size={20} weight="bold" />
                    </Button>
                    <Button icon variant="ghost" size="lg">
                        <GithubLogo size={20} weight="bold" />
                    </Button>
                    <ThemeToggle variant="ghost" size="lg"/>
                </div>
            </div>
        </div>
    )
}