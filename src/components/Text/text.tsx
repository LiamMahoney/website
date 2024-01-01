import styles from './text.module.css'

type Props = {
    children: React.ReactNode,
    size: "xs" | "sm" | "md" | "lg",
    muted?: boolean
}

export default function Text({ muted, size, children }:Props) {

    const classNames = [styles.text, styles[size], muted ? styles.muted : ''].join(' ');

    return (
        <p className={classNames}>{children}</p>
    )
}
