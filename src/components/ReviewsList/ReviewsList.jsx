import StarRating from '../StarRating/StarRating.jsx';
import css from '../ReviewsList/ReviewsList.module.css';

function ReviewsList ({item}) {
    return (
        <>
        <div className={css.reviewsListTitle}>
            <div className={css.reviewsAvatar}>
            <p className={css.reviewsAvatarContent}>{item.reviewer_name[0]}</p>
            </div>
            <div className={css.reviewsListNameContainer}>
                <p className={css.reviewsListName}>{item.reviewer_name}</p>
                <p>
                    <StarRating rating={item.reviewer_rating}/>
                </p>
            </div>
        </div>
        <p className={css.reviewsListComment}>{item.comment}</p>
        </>
        

    )
}

export default ReviewsList