import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader () {
    return (
        <div className={css.loader}>
        <RotatingLines/>
        </div>
    )
};

export default Loader;