import Star from '../StarRating/Star.jsx';

function StarRating ({rating}) {
    const totalStars = 5;

    return (
        <>
       {Array.from({length: totalStars}, (_, index) => (
        <Star key={index} full={index < rating}/>
       ))}
        </>
    )
}

export default StarRating;