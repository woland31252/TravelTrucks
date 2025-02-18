import css from './NotFound.module.css';

export function NotFound() {
    return (
        <div className={css.notFoundContainer}>
            <p className={css.notFoudItem}>Nothing not found!</p>
        </div>
    )
}
