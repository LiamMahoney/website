"use client";
import styles from './page.module.css';
import PostListing from '@/components/PostListing/postListing';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState, useRef, useEffect} from 'react';
const debounce = require('lodash.debounce');

const posts = [
    {
        title: "Scheduled Podman Containers",
        tags: ["podman", "systemd"],
        createDate: "2023-12-02"
    },
    {
        title: "Podman Container Remote Logging",
        tags: ["podman", "systemd"],
        createDate: "2023-12-15"
    },
    {
        title: "Podman Event Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-21"
    },
    {
        title: "Storing Secrets in Python Configuration Files",
        tags: ["python"],
        createDate: "2024-1-18"
    },
    {
        title: "Python Web Request Error Handling",
        tags: ["python", "tag2"],
        createDate: "2024-2-5"
    },
    {
        title: "Scheduled Podman Containers",
        tags: ["podman"],
        createDate: "2023-12-02"
    },
    {
        title: "Podman Container Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-15"
    },
    {
        title: "Podman Event Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-21"
    },
    {
        title: "Storing Secrets in Python Configuration Files",
        tags: ["python"],
        createDate: "2024-1-18"
    },
    {
        title: "Python Web Request Error Handling",
        tags: ["python"],
        createDate: "2024-2-5"
    },
    {
        title: "Scheduled Podman Containers",
        tags: ["podman"],
        createDate: "2023-12-02"
    },
    {
        title: "Podman Container Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-15"
    },
    {
        title: "Podman Event Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-21"
    },
    {
        title: "Storing Secrets in Python Configuration Files",
        tags: ["python"],
        createDate: "2024-1-18"
    },
    {
        title: "Python Web Request Error Handling",
        tags: ["python"],
        createDate: "2024-2-5"
    },
    {
        title: "Scheduled Podman Containers",
        tags: ["podman"],
        createDate: "2023-12-02"
    },
    {
        title: "Podman Container Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-15"
    },
    {
        title: "Podman Event Remote Logging",
        tags: ["podman"],
        createDate: "2023-12-21"
    },
    {
        title: "Storing Secrets in Python Configuration Files",
        tags: ["python"],
        createDate: "2024-1-18"
    },
    {
        title: "Python Web Request Error Handling",
        tags: ["python"],
        createDate: "2024-2-5"
    },
]


export default function Home() {
    const [displayedPosts, setDisplayedPosts] = useState(posts);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // adds focus to filter input when `/` key is pressed
    useEffect(() => {
        const handleKeyDown = (e:KeyboardEvent) => {
            if (e.key === '/') {
                e.preventDefault();
                if (inputRef && inputRef.current) {
                    inputRef.current.focus();
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        const cleanup = () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    // filtering posts based on title + tag text matching input
    const textFilter = ((e:React.ChangeEvent<HTMLInputElement>) => {
        const lowerValue = e.target.value.toLowerCase();

        setDisplayedPosts(displayedPosts.filter((post) => {
            if (post.title.toLowerCase().includes(lowerValue)) {
                // whether the post title contains the text
                return true;
            } else {
                // whether or not any of the post's tags contain the text
                return post.tags.reduce((a, i) => {
                    if (i.toLowerCase().includes(lowerValue)) {
                        return true;
                    } else {
                        //true if match found, false if not
                        return a;
                    }
                }, false);
            }
        }));
    });
    const debouncedTextFilter = debounce(textFilter, 300);
    const handleInputChange = ((e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            // filter text removed - reset list of posts
            // don't debounce value
            // fixes issue of user having something typed, quickly CTRL+A, 
            /// delete and typing a different filter value
            setDisplayedPosts(posts);
        } else {
            // filter text present - debounce filter
            debouncedTextFilter(e);
        }
    });

    return (
        <div className={styles.content_container}>
            <div className={styles.left_container}/>
            <div className={styles.center_container}>
                {/* TODO: check if list length is 0, if so display some no posts found text (filter supplied) */}
                {displayedPosts.map(post => (
                    <PostListing
                        title={post.title}
                        tags={post.tags}
                        publishDate={post.createDate}
                    />
                ))}
            </div>
            {/* TODO: mobile filters? */}
            <div className={styles.right_container}>
                <div className={styles.filter_container}>
                    <div className={styles.filter_content}>
                        {/* TODO: add magnifying glass icon - not working on safari???!!!*/}
                        {/* TODO: add key (KBD?) to enable focus */}
                        <div className={styles.search_bar}>
                            <input ref={inputRef} onChange={handleInputChange} placeholder="" />
                            <MagnifyingGlass className={styles.search_bar_left_icon} />
                            {/* TODO: style KBD better*/}
                            {/* TODO: get KBD to dissappear when input is focused - I guess not huge deal if I can't figure it out? */}
                            <kbd className={styles.search_bar_right_icon}>/</kbd>
                        </div>
                        <p className={styles.header_text}>Tags</p>
                        <div className={styles.tag_container}>
                            {/* TODO: populate with tags */}
                            {/* TODO: tag filter functionality */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
