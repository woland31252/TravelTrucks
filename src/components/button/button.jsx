import clsx from 'clsx';
import css from './Button.module.css';


function Button ({variant, type, children}) {
    const styleVariant = clsx(css.button, css[variant])
    return (
        <>
        <button type={type} className={styleVariant}>{children}</button>
        </>
    )
}

export default Button