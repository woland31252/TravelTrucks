import { useSelector } from "react-redux";
import { selectorsCamperById } from "../../redux/camper/selectorsCamper.js";
import css from "../ImageTumbGallery/ImageTumbGallery.module.css";

function ImageTumbGallery() {
  const camper = useSelector(selectorsCamperById);
  return (
    <>
      {camper.gallery.map((image, index) => (
        <img
          key={index}
          className={css.imgCamperCard}
          src={image.thumb}
          alt="The camper's image"
        />
      ))}
    </>
  );
}

export default ImageTumbGallery;
