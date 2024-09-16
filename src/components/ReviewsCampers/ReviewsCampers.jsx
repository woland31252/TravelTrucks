import { useSelector } from "react-redux";
import { selectorsCamperById } from "../../redux/camper/selectorsCamper.js";
import ReviewsList from '../ReviewsList/ReviewsList.jsx';
import css from '../ReviewsCampers/ReviewsCampers.module.css';

function ReviewsCamper () {
    const camper = useSelector(selectorsCamperById);
    return (
        <ul className={css.reviewsList}>
            {camper.reviews.map((item, index)=>(<li key={index}><ReviewsList item={item}/></li>))}
        </ul>
    )
}

export default ReviewsCamper