import styles from './button.module.css'

export type Props = {
    children: React.ReactNode,
    variant?: "primary" | "secondary" | "ghost" | "outline" | "link" | "ghost-outline",
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    icon?: boolean,
    fullWidth?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ variant="primary", size="md", children, icon=false, fullWidth=false, onClick}:Props) {

    const classNames = [styles[variant], styles.button].join(' ');

    return (
        <span className={fullWidth ? styles.fullWidth : ''}>
            {/* span allows margin + padding to be edited on button without 
            messing with the 'animation'. e.g. in scenario the parent element
            has a `*` css selector (`parent * { margin: 1px;}`)*/}
            <button className={classNames} full-width={`${fullWidth}`} button-size={size} button-icon={`${icon}`} onClick={onClick}>{children}</button>
        </span>
    )
}