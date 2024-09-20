import Navigation from '../temp/temp.jsx';
import css from '../AppBar/AppBar.module.css';

export function AppBar() {
    return (
        <header className={css.header}>
            <Navigation/>
        </header>
    )
}