import Gallery from "../components/Gallery.tsx";
import type {ImageCategory} from "../utils/loadImages.ts";

export default function GalleryPage() {

    const type1:ImageCategory = "herzh";
    const title1:string = "Herzhaftes";
    const type2:ImageCategory = "suess";
    const title2:string = "Süßes";

    return (
        <div className="galleryPage">
            <Gallery type={type1} title={title1}/>
            <Gallery type={type2} title={title2}/>
        </div>
    )
}