import icon from '../../images/icons.svg';
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
                <svg className={css.iconStar}>
                <use href={`${icon}#icon-star`} />
              </svg>
            </div>
        </div>
        <p className={css.reviewsListComment}>{item.comment}</p>
        </>
        

    )
}

export default ReviewsList