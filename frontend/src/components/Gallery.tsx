import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {loadImages} from "../utils/loadImages.ts";
import type {ImageCategory} from "../utils/loadImages.ts";
import {useRef} from "react";

type GalleryProps = {
    type: ImageCategory;
    title: string
}

export default function Gallery(props:Readonly<GalleryProps>) {

    const images = loadImages(props.type);

    // useRef: Referenz auf ein DOM-Element, das ein Re-rendern auslöst, wenn es sich ändert.
    const scrollRef = useRef<HTMLDivElement>(null);

    // Prüft alle Bilder in der Galerie und findet das Erste, dessen offsetLeft außerhalb des Rechten Randes liegt.
    // Danach springt es beim Scrollen auf dieses Bild.
    const scrollToNextImage = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLImageElement[];

        const containerLeft = container.scrollLeft;
        const containerRight = containerLeft + container.clientWidth;

        for (const child of children) {
            const childLeft = child.offsetLeft;
            const childRight = childLeft + child.offsetWidth;

            // Wenn das Bild weiter rechts beginnt als die sichtbare Fläche
            if (childLeft >= containerRight - 1) {
                container.scrollTo({
                    left: childLeft,
                    behavior: 'smooth',
                });
                break;
            }
        }
    };

    // Durchläuft die Bilder von Rechts nach Links und findet das Erste, das links vollständig außerhalb liegt
    // und springt dorthin.
    const scrollToPrevImage = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLImageElement[];

        const containerLeft = container.scrollLeft;

        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            const childRight = child.offsetLeft + child.offsetWidth;

            // Wenn das Bild vollständig links außerhalb liegt
            if (childRight <= containerLeft + 1) {
                container.scrollTo({
                    left: child.offsetLeft,
                    behavior: 'smooth',
                });
                break;
            }
        }
    };

    return (
        <div className="galleryComponent">
            <h1 className="galleryTitle">{props.title}</h1>
            <div className="galleryContainer">
                <button className={"scrollButton left"} onClick={scrollToPrevImage}>
                    <FaChevronLeft />
                </button>
                <button className={"scrollButton right"} onClick={scrollToNextImage}>
                    <FaChevronRight />
                </button>
                <div className="galleryContent" ref={scrollRef}>
                    {images.map(image => (
                        <img src={image} alt={"Ein Bild einer Speise."} className="galleryContent"/>
                    ))}
                </div>
            </div>
        </div>
    )
}