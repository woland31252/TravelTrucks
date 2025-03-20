import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers, fetchLocation } from "../../redux/operations.js";
import { toglePage } from "../../redux/camper/sliceCamper.js";
import {
  selectorsCampers,
  selectorsCampersTotal,
  selectorsPage,
  selectorsLimit,
  selectorsError,
} from "../../redux/camper/selectorsCamper.js";
import {
  selectorFilter,
  selectLocationCampers,
} from "../../redux/filterCamper/selectorsFilterCamper.js";

import Location from "../../components/Location/Location.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Collection from "../../components/Collection/Collection.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";
import NotFound from "../../components/NotFound/NotFound.jsx";

function CatalogPage() {
  const dispatch = useDispatch();
  const camperItems = useSelector(selectorsCampers);
  const total = useSelector(selectorsCampersTotal);
  const page = useSelector(selectorsPage);
  const limit = useSelector(selectorsLimit);
  const location = useSelector(selectLocationCampers);
  const query = useSelector(selectorFilter);
  const isError = useSelector(selectorsError);
  const [showBtn, setShowBtn] = useState(true);
  const [notFound, setNotFound] = useState(false);
 


  function handleLoadMore() {
    dispatch(toglePage(page + 1));
  };

console.log(query)

  useEffect(() => {
    // dispatch(fetchLocation());
    // dispatch(fetchAllCampers({ page, limit, location }));
    // if (!query) {
    //   dispatch(fetchAllCampers({ page, limit, location }));
    // }
    function fetchData() {
      dispatch(fetchLocation());
      dispatch(fetchAllCampers({ location, page, limit, ...query }));

      setShowBtn(total > limit && camperItems.length >= limit && !isError);
      setNotFound(camperItems.length === 0 && isError);
      // setNotFound(!total === 0 || !camperItems.length === 0);
    }
    fetchData();
  }, [
    camperItems.length,
    dispatch,
    isError,
    limit,
    page,
    query,
    total,
    location,
  ]);

  console.log("campersItems:", camperItems);
  console.log("campersItems:", camperItems.length);
  console.log("total: ", total);
  console.log("filter: ", query)

  return (
    <>
      <div className={css.catalogPageContainer}>
        <div className={css.catalogSearchContainer}>
          <Location />
          <Filters/>
        </div>
        <div className={css.catalogPageCampers}>
          { notFound ? (
            <NotFound notFound={notFound} />
          ) : (
            <Collection />
          )}
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
