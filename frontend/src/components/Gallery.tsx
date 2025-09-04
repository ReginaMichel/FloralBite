type GalleryProps = {
    type: string
    title: string
}

export default function Gallery(props:Readonly<GalleryProps>) {
    return (
        <div className="galleryComponent">
            <h2 className="galleryTitle">{props.title}</h2>
            <div className="galleryContent">

            </div>
        </div>
    )
}