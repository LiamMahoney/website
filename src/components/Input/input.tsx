import styles from './postListing.module.css'

type Props = {

}

export default function PostListing({ }:Props) {

    return (
        <div className={styles.post_listing_container}>
            <span className={styles.post_title}>{title}</span>
            <div className={styles.post_meta_container}>
                <span className={styles.post_date}>{publishDate}</span>
                {tags.map(tag => (
                    <span key={tag} className={styles.tag}>{`#${tag}`}</span>
                ))}
            </div>
        </div>
    )

}