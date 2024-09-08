import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {fetchAllCampers} from '../../redux/operations.js';
import {selectorsIsLoading, selectorsError} from '../../redux/camper/selectorsCamper.js';
// import Location from '../../components/Location/Location.jsx';
// import Filters from '../../components/Filters/Filters.jsx';
import Collection from '../../components/Collection/Collection.jsx';
import FetchError from '../../components/fetchError/FetchError.jsx';
import Loader from '../../components/loader/Loader.jsx';
// import css from './CatalogPage.module.css';

function CatalogPage () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectorsIsLoading);
    const isError = useSelector(selectorsError);

    useEffect(()=>{
        dispatch(fetchAllCampers());
    }, [dispatch])

    return (
        // <div className={css.catalog}>
        //     {isLoading && <Loader/>}
        //     <div className={css.catalogSearch}>
        //         <Location/>
        //         <Filters/>
        //     </div>
        //     <div className={css.catalogCollection}>
        //         <Collection/>
        //         {/* {isError?<FetchError/>:<Collection/>} */}
        //     </div>
        // </div>
        <div>
            {isLoading && <Loader/>}
            {isError?<FetchError/>:<Collection/>}
        </div>
    )
}

export default CatalogPage