import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {loadImages} from "../utils/loadImages.ts";
import type {ImageCategory} from "../utils/loadImages.ts";
import {useEffect, useRef, useState} from "react";

type GalleryProps = {
    type: ImageCategory;
    title: string
}

export default function Gallery(props:Readonly<GalleryProps>) {

    const images = loadImages(props.type);
    const [buttonLeftDisabled, setButtonLeftDisabled] = useState<boolean>(true);
    const [buttonRightDisabled, setButtonRightDisabled] = useState<boolean>(false);

    // useRef: Referenz auf ein DOM-Element, das ein Re-rendern auslöst, wenn es sich ändert.
    const scrollRef = useRef<HTMLDivElement>(null);

    // Prüft alle Bilder in der Galerie und findet das Erste, dessen offsetLeft außerhalb des Rechten Randes liegt.
    // Danach springt es beim Scrollen auf dieses Bild.
    const scrollRight = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLImageElement[];

        const containerLeft = container.scrollLeft;
        const containerRight = containerLeft + container.clientWidth;

        // Nötig um sauber auch die letzten Bilder zu erwischen
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        for (const child of children) {
            const childLeft = child.offsetLeft;
            const childRight = childLeft + child.offsetWidth;

            // Wenn das Bild weiter rechts beginnt als die sichtbare Fläche
            if (childRight > containerRight + 1) {
                container.scrollTo({
                    // Um auch das Ende sauber zu erwischen wurde Math.min und maxScrollLeft hinzugefügt.
                    left: Math.min(childLeft, maxScrollLeft),
                    behavior: 'smooth',
                });
                break;
            }
        }
    };

    // Durchläuft die Bilder von Rechts nach Links und zeigt alle an, die noch außerhalb waren, die zusammen reinpassen.
    const scrollLeft = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLImageElement[];

        const containerLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;

        let targetChild: HTMLImageElement | null = null;

        // Wir gehen rückwärts durch die Bilder
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            const childRight = child.offsetLeft + child.offsetWidth;

            // Wenn das Bild außerhalb des linken Bereichs liegt
            if (childRight <= containerLeft - 1) {
                // Prüfe, ob es (plus seine Breite) in den Container passt
                if (!targetChild || (containerLeft - child.offsetLeft) <= containerWidth) {
                    targetChild = child;
                } else {
                    break;
                }
            }
        }

        if (targetChild) {
            container.scrollTo({
                left: targetChild.offsetLeft,
                behavior: 'smooth',
            });
        }
    };

    // Überprüft, ob ein Ende der Galerie erreicht ist und ein Button disabled werden sollte.
    const updateButtonStates = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLImageElement[];
        const firstChild = children[0];
        const lastChild = children[children.length - 1];

        if (!firstChild || !lastChild) return;

        const containerRect = container.getBoundingClientRect();
        const firstChildRect = firstChild.getBoundingClientRect();
        const lastChildRect = lastChild.getBoundingClientRect();

        // Wenn das erste Bild sichtbar ist (linker Rand des Bildes >= linker Rand des Containers)
        const isAtStart = firstChildRect.left >= containerRect.left - 1;
        // Wenn das letzte Bild sichtbar ist (rechter Rand des Bildes <= rechter Rand des Containers)
        const isAtEnd = lastChildRect.right <= containerRect.right + 1;
        setButtonLeftDisabled(isAtStart);
        setButtonRightDisabled(isAtEnd);
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const handleScroll = () => {
            updateButtonStates();
        };
        container.addEventListener('scroll', handleScroll);
        // Initiale Prüfung
        updateButtonStates();
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Das onLoad bei den Bildern ist wichtig, da es beim Neuladen der Seite passieren kann, dass beide Buttons auf
    // disabled gesetzt werden, weil die Bilder zu lange brauchen und die Galerie bei der Prüfung noch "leer" ist.
    return (
        <div className="galleryComponent">
            <h1 className="galleryTitle">{props.title}</h1>
            <div className="galleryContainer">
                <button className={"scrollButton left"} onClick={scrollLeft} disabled={buttonLeftDisabled}>
                    <FaChevronLeft />
                </button>
                <button className={"scrollButton right"} onClick={scrollRight} disabled={buttonRightDisabled}>
                    <FaChevronRight />
                </button>
                <div className="galleryContent" ref={scrollRef}>
                    {images.map(image => (
                        <img src={image} alt={"Ein Bild einer Speise."} className="galleryImages"
                             onLoad={updateButtonStates}/>
                    ))}
                </div>
            </div>
        </div>
    )
}