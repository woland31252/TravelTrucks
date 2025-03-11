// import css from "./LocationList.module.css";

function LocationList({LocationElem}) {
  return (
    <>
          <option value={LocationElem}>{LocationElem}</option>
    </>
  );
}

export default LocationList;
