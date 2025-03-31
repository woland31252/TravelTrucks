import css from '../Favorites/Favorites.module.css'
function Favorites() {
    return (
      <div className={css.favoriteContainer}>
        <p className={css.favoriteItem}>Favorites Page</p>
      </div>
    );
};

export default Favorites;