import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperId } from "../../redux/operations.js";
import { selectorsCamperById} from "../../redux/camper/selectorsCamper.js";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

function CamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectorsCamperById);
  

  useEffect(() => {
    dispatch(fetchCamperId(id));
  }, [dispatch, id]);

  if (!camper || !camper.name) {
    return <Loader />;
  }
  return (
    <>
      <CamperCard />
    </>
  );
}

export default CamperPage;
