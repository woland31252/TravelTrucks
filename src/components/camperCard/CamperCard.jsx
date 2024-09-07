import css from '../camperCard/CamperCard.module.css';
import Button from '../button/Button.jsx';

function CamperCard ({camperItem: {
    name,
    price,
    rating,
    location,
    transmission,
    engine,
    AC,
    kitchen,
    gallery: {tumb},
}}) {
    return (
        <>
        <div className={css.imgCamperContainer}>
            <img className={css.imgCamperCard} src={tumb}/>
        </div>
        <div className={css.informCamperContainer}>
            <div className={css.camperTitlePrice}>
            <h2 className={css.camperTitle}>{name}</h2>
            <p className={css.CamperPrice}>{price}</p>
            </div>
            <div className={css.camperRatingLocation}>
            <p className={css.camperRating}>{rating}</p>
            <p className={css.camperLocation}>{location}</p>
            </div>
            <div className={css.camperProperties}>
                <p className={css.camperTramsmission}>{transmission}</p>
                <p className={css.camperEngine}>{engine}</p>
                <p className={css.camperCitchen}>{kitchen}</p>
            </div>
                <p className={css.camperAC}>{AC}</p>
                <Button>Show more</Button>
        </div>
        </>
    )
}

export default CamperCard;