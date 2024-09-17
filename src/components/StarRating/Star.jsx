
import clsx from 'clsx';
import icon from '../../images/icons.svg';
import css from '../StarRating/Star.module.css';

function Star ({full}) {
const buildClassStar = clsx(css.star, full && css.starFull);
    return (
        <>
        <svg className={buildClassStar}>
            <use href={`${icon}#icon-star-default`}/>
        </svg>
        </>
    )
}

export default Star;