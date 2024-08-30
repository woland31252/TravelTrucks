import css from '../button/button.module.css';

function Button ({children}) {
    return (
        <>
        <button type="button" className={css.button}>{children}</button>
        </>
    )
}

export default Button