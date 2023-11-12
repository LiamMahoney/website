import { Moon, Sun } from '@phosphor-icons/react';
import Button from '../Button/button';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type Props = {
    variant?: "primary" | "secondary" | "ghost" | "outline" | "link" | "ghost-outline",
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export default function ThemeToggle({ variant="primary", size="md" }:Props) {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])
    
    const iconSize = size === "xs" ? 8 : size === "sm" ? 12 : size === "md" ? 16 : size === "lg" ? 20 : size === "xl" ? 24 : 16;

    const icon_svg = mounted === false ? <Sun size={iconSize} weight="bold"/> : theme === 'light' ? <Moon size={iconSize} weight="bold"/> : <Sun size={iconSize} weight="bold"/> 

    return (
        <Button icon variant='ghost' size={size} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {icon_svg}
        </Button>
    )
}