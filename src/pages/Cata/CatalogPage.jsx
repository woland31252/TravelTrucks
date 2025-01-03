import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/operations.js";
import { toglePage } from "../../redux/camper/sliceCamper.js";
import {
  selectorsCampers,
  selectorsCampersTotal,
  selectorsError,
  selectorsPage,
} from "../../redux/camper/selectorsCamper.js";
import { selectorFilter } from "../../redux/filterCamper/selectorsFilterCamper.js";
import Location from "../../components/Location/Location.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Collection from "../../components/Collection/Collection.jsx";
import FetchError from "../../components/FetchError/FetchError.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  const [showBtn, setShowBtn] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [itemsLength, setItemsLength] = useState(null);
  const dispatch = useDispatch();
  const isError = useSelector(selectorsError);
  const campers = useSelector(selectorsCampers);
  const total = useSelector(selectorsCampersTotal);
  const page = useSelector(selectorsPage);
  const query = useSelector(selectorFilter);

  function handleLoadMore() {
    dispatch(toglePage(page + 1));
  }

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchAllCampers(page));
      setItemsLength(campers.length);
      setShowBtn(itemsLength >= 5 && total !== 0);
    };
    fetchData();
  }, [dispatch, page, total, itemsLength, campers.length]);

  return (
    <>
      <div className={css.catalogPageContainer}>
        <div className={css.catalogSearchContainer}>
          <Location />
          <Filters />
        </div>
        <div className={css.catalogPageCampers}>
          {isError ? <FetchError /> : <Collection />}
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
