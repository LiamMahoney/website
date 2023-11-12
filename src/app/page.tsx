"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Text from '@/components/Text/text';
import Button from '@/components/Button/button';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

// TODO: read from directory during build
const imgs = [
    "/home-imgs/03262F79-486E-4656-AD1D-F40FF46791AC.jpeg",
    "/home-imgs/71971923599__8EE45ED4-AF2F-4684-A540-15AD6D3B1641.jpeg",
    "/home-imgs/IMG_1237.jpeg",
    "/home-imgs/IMG_2218.jpeg",
    "/home-imgs/IMG_2974.png",
    "/home-imgs/IMG_3793.jpeg",
    "/home-imgs/IMG_3918.jpeg",
    "/home-imgs/IMG_6624.jpeg",
    "/home-imgs/IMG_8562.jpeg",
    "/home-imgs/IMG_8833.jpeg",
    "/home-imgs/IMG_8841.jpeg",
    "/home-imgs/image000001.jpeg"
]

export default function Home() {
    const [currentImage, setCurrentImage] = useState(Math.round(Math.random() * (imgs.length - 1)));

    const decrementImg = () => {
        if (currentImage - 1 < 0) {
            // resetting to last image
            setCurrentImage(imgs.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    const incrementImg = () => {
        if (currentImage + 1 > imgs.length - 1) {
            // resetting to first image
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            incrementImg();
        } else if (e.key === "ArrowLeft") {
            decrementImg();
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
    
        return function cleanup() {
          document.removeEventListener('keyup', handleKeyUp);
        }
      }, [currentImage, handleKeyUp]);

    return (
        <main className={styles.mainContainer}>
            {/* TODO: see if flex wrapping can be improved.. really need to come up with a global max content width - maybe doesn't need to be the same from page to page though? */}
            <div className={styles.carouselContainer}>
                <div className={styles.imageContainer}>
                    {/* TODO: implement lazy load URL so client matches server to avoid error? */}
                    {/* FIXME: doesn't resize when browser is resized vertically to a size smaller than div */}
                    {/* TODO: need to figure out pre-loading images. Might need to add + hide +/- two images from current image? */}
                    <Image
                        src={imgs[currentImage]}
                        // TODO: figure out a way to dynamically store alt with image
                        // TODO: if above is do-able, display alt as tool-tip?
                        alt="liam and his dog"
                        sizes="400px"
                        fill
                        style={{
                          objectFit: 'contain',
                          borderRadius: '20px'
                        }}
                    />
                    </div>
                <div className={styles.imageButtonContainer}>
                    {/* TODO: figure out swipe on mobile */}
                    {/* TODO: add animation to images sliding to right / left depending on direction clicked? */}
                    <Button icon variant="ghost" onClick={decrementImg}>
                        <ArrowLeft size={16} weight="bold"/>
                    </Button>
                    <Button icon variant="ghost" onClick={incrementImg}>
                        <ArrowRight size={16} weight="bold"/>
                    </Button>
                </div>
            </div>
            <div className={styles.textContainer}>
                <Text size="sm">Hi, I&apos;m Liam.</Text>
                <Text size="sm">I&apos;m somewhere between a Cyberecurity Engineer and Web Developer. I work alongside a Cybersecurity Incident Response Team building integrations between our SOAR platform and other security tools.</Text>
                <Text size="sm">When I&apos;m not on a computer I&apos;m most likely playing with my dog or trying to grill on my Big Green Egg.</Text>
            </div>

        </main>
    )
}
