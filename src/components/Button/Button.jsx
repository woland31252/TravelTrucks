import clsx from 'clsx';
import css from './Button.module.css';


function Button ({variant, type, onClick, disabled, children}) {
    const styleVariant = clsx(css.button, css[variant])
    return (
        <>
            <button type={type} onClick={ onClick} disabled={disabled} className={styleVariant}>{children}</button>
        </>
    )
}

export default Button