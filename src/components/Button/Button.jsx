import clsx from 'clsx';
import css from './Button.module.css';


function Button ({variant, type, onClick, onSubmit, disabled, children}) {
    const styleVariant = clsx(css.button, css[variant])
    return (
        <>
            <button type={type} onClick={ onClick} onSubmit={onSubmit} disabled={disabled} className={styleVariant}>{children}</button>
        </>
    )
}

export default Button