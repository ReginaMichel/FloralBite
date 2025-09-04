import {loadImages} from "../utils/loadImages.ts";
import type {ImageCategory} from "../utils/loadImages.ts";

type GalleryProps = {
    type: ImageCategory;
    title: string
}

export default function Gallery(props:Readonly<GalleryProps>) {

    const images = loadImages(props.type);

    return (
        <div className="galleryComponent">
            <h2 className="galleryTitle">{props.title}</h2>
            <div className="galleryContent">
                {images.map(image => (
                    <img src={image} alt={"Ein Bild einer Speise."}/>
                ))}
            </div>
        </div>
    )
}