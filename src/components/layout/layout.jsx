import { Suspense } from 'react';
import Navigation from '../navigation/navigation.jsx';
import css from '../layout/layout.module.css';

export default function Layout({children}) {
    return (
        <div className={css.container}>
            <Navigation />
            <Suspense fallback={<p>Loading page...</p>}>{children}</Suspense> 
        </div>
    )
}