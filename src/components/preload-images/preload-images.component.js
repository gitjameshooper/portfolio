import { useEffect } from "react";
import jamesSrc from "./../../assets/img/channel-1/james.jpg";
import concreteSrc from "./../../assets/img/channel-1/concrete-floor.jpg";
import marylinSrc from "./../../assets/img/channel-1/marilyn-monroe-tile.jpg";
import engSiteSrc from "./../../assets/img/channel-2/english.jpg";
import guessSrc from "./../../assets/img/channel-3/guess.png";
import volWebSrc from "./../../assets/img/channel-4/volusion-website.jpg";
import fsWebSrc from "./../../assets/img/channel-5/flosports-web.jpg";
import lcSrc from "./../../assets/img/channel-6/land-accrue-web.jpg";

export default function PreloadImages() {
    const imagesList = [jamesSrc, concreteSrc, marylinSrc, engSiteSrc, guessSrc, volWebSrc, fsWebSrc, lcSrc];

    useEffect(() => {
        imagesList.forEach((imgSrc) => {
            let image = new Image();
            image.src = imgSrc;
        }, []);
    });
    return null;
}