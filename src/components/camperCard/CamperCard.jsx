import { useDispatch, useSelector } from "react-redux";
import {selectorsCamperById} from '../../redux/camper/selectorsCamper.js';
import icon from '../../images/icons.svg';
import css from '../CamperCard/CamperCard.module.css';

function CamperCard () {
const camperId = useSelector(selectorsCamperById);
}