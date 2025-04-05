import css from '../FavoriteCollection/FavoriteCollection.module.css';
import { useSelector } from 'react-redux';
import { selectorsFavorite } from '../../redux/camper/selectorsCamper';
import CamperList from "../CamperList/CamperList.jsx";

const FavoriteCollection = () => {
  const favorites = useSelector(selectorsFavorite);
  return (
    <>
      <ul >
        {favorites.map((item) => (
          <li key={item.id}>
            <CamperList item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoriteCollection;