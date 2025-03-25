import clsx from 'clsx';
import css from './NotFound.module.css';

function NotFound({ isError }) {

    const notFoudStyle = clsx( css.notFoundContainerTrue, isError && css.notFoundContainerFalse )
    return (
        <div className={notFoudStyle}>
            <p className={css.notFoudItem}>Nothing not found!</p>
        </div>
    )
}

export default NotFound ;

// export function NotFound() {
//   return (
//     <div className={css.notFoundContainerTrue}>
//       <p className={css.notFoudItem}>Nothing not found!</p>
//     </div>
//   );
// }
