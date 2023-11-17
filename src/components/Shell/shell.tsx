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

export default function Shell({ children }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleBurgerClick = (() => {
        setMobileOpen(!mobileOpen);
    });

    return (

        <div className={styles.top_container} mobile-menu-open={`${mobileOpen}`}>
            {/* gave up on trying to fix the following:
                - disable scroll behind mobile navbar. either causes:
                    - layout shift
                    - scroll bar to appear behind navbar
                - safari mobile scrolling down causes URL bar to dissapear / shrink, which causes navbar to be smaller than allowable space for a ~ second

                scrollbar only being on content_container might be OK? issue above is the scrollbar goes behind the navbar, but if the scrollbar only went up to the navbar maybe this would help my issue?
            */}
            <nav className={styles.navbar}>
                <div className={styles.navbar_center_container}>
                    <div className={styles.navbar_center_left}>
                        <p className={styles.logo}>Liam Mahoney</p>
                    </div>
                    <div className={styles.navbar_center_center}>
                        <Button variant="ghost">
                            Home
                        </Button>
                        <Button variant="ghost">
                            Projects
                        </Button>
                        <Button variant="ghost"> 
                            Posts
                        </Button>
                    </div>
                    <div className={styles.navbar_center_right}>
                        <Button icon variant="ghost">
                            <LinkedinLogo size={16} weight="bold" />
                        </Button>
                        <Button icon variant="ghost"> 
                            <GithubLogo size={16} weight="bold" />
                        </Button>
                        <ThemeToggle variant="ghost" />
                    </div>
                    <div className={styles.navbar_center_right_mobile}>
                        <Hamburger 
                            size={20}
                            toggle={handleBurgerClick}
                            toggled={mobileOpen}
                        />
                    </div>
                </div>
            </nav>
            <div mobile-menu-open={`${mobileOpen}`} className={styles.mobile_nav}>
                <div className={styles.mobile_nav_center_container}>
                    {/* TODO: add links */}
                    <Button fullWidth size="xl" variant="ghost">
                        <span className={styles.mobile_button_text}>Home</span>
                    </Button>
                    <Button fullWidth size="xl" variant="ghost">
                        <span className={styles.mobile_button_text}>Projects</span>
                    </Button>
                    <Button fullWidth size="xl" variant="ghost"> 
                        <span className={styles.mobile_button_text}>Posts</span>
                    </Button>
                </div>
                <div className={styles.mobile_nav_bottom_container}>
                    <Button icon size="lg" variant="ghost">
                        <LinkedinLogo size={20} weight="bold" />
                    </Button>
                    <Button icon size="lg" variant="ghost"> 
                        <GithubLogo size={20} weight="bold" />
                    </Button>
                    <ThemeToggle size="lg" variant="ghost" />
                </div>
            </div>
            <main className={styles.content_container}>
                {children}
            </main>
        </div>

    )
}