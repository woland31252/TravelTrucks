import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/operations.js";
import { toglePage } from "../../redux/camper/sliceCamper.js";
import {
  selectorsCampers,
  selectorsCampersTotal,
  selectorsPage,
  selectorsLimit,
  selectorsError
} from "../../redux/camper/selectorsCamper.js";
import { selectorFilter } from "../../redux/filterCamper/selectorsFilterCamper.js";

import Location from "../../components/Location/Location.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Collection from "../../components/Collection/Collection.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";
import NotFound  from "../../components/NotFound/NotFound.jsx";



function CatalogPage() {
  
  const dispatch = useDispatch();
  const camperItems = useSelector(selectorsCampers);
  const total = useSelector(selectorsCampersTotal);
  const page = useSelector(selectorsPage);
  const limit = useSelector(selectorsLimit);
  const query = useSelector(selectorFilter);
  const isError = useSelector(selectorsError)
  const [showBtn, setShowBtn] = useState(true);
  const [notFound, setNotFound] = useState(false);
  
  
  
  function handleLoadMore() {
    dispatch(toglePage(page + 1));
  }
  

  useEffect(() => {
    if (!query) {
      dispatch(fetchAllCampers({page, limit}))
    }
    function fetchData() {
      dispatch(fetchAllCampers({ page, limit, ...query }));
      
        
      setShowBtn(total > limit && camperItems.length >= limit && !isError);
      setNotFound(total === 0 || camperItems.length === 0);
      
    };
    fetchData();
    
  }, [camperItems.length, dispatch, isError, limit, page, query, total]);

  console.log("campersItems:", camperItems.length)
  console.log("total: ", total);
  
  

  return (
    <>
      <div className={css.catalogPageContainer}>
        <div className={css.catalogSearchContainer}>
          <Location />
          <Filters />
        </div>
        <div className={css.catalogPageCampers}>
          {(isError || notFound)? <NotFound notFound={notFound} />:<Collection/>}
          {showBtn && (
            <Button type="button" variant="loadMore" onClick={handleLoadMore}>
              Load more
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default CatalogPage;
