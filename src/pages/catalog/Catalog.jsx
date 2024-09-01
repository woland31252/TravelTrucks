import Location from '../../components/location/Location.jsx';
import Filters from '../../components/filters/Filters.jsx';
import Collection from '../../components/collection/Collection.jsx';
import css from '../catalog/Catalog.module.css';

function Catalog () {
    return (
        <div className={css.catalog}>
            <div className={css.catalogSearch}>
                <Location/>
                <Filters/>
            </div>
            <div className={css.catalogCollection}>
                <Collection/>
            </div>
        </div>
    )
}

export default Catalog