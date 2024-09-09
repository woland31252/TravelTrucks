import clsx from 'clsx';
import css from './Button.module.css';


function Button ({variant, children}) {
    const styleVariant = clsx(css.button, css[variant])
    return (
        <>
        <button type="button" className={styleVariant}>{children}</button>
        </>
    )
}

export default Button