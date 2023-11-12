import styles from './header.module.css'

type Props = {
    children: React.ReactNode,
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Header({ level, children }:Props) {

    const HeadingTag = level;

    const classNames = [styles.header, styles[level]].join(' ');

    return (
        <HeadingTag className={classNames}>{children}</HeadingTag>
    )
}
