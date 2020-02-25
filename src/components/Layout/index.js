import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Menu from './Menu';
import SEO from '../SEO';

export default ({
    children, location
}) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        setTheme(window.__theme);
        if (window) {
            window.__onThemeChange = () => {
                setTheme(window.__theme);
            };
        }
    }, [])

    const themeToggle = () => {
        if (window) {
            window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light')

        }
    }
    return (
        <div
            style={{
                color: 'var(--textNormal)',
                background: 'var(--bg)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                minHeight: '100vh',
            }}
        >
            <SEO />
            <Helmet
                meta={[
                    {
                        name: 'theme-color',
                        content: theme === 'light' ? '#ffa8c5' : '#282c35',
                    },
                ]}
            />
            <Menu location={location} themeToggle={themeToggle} 
                theme={theme}
            />
            {children}
        </div>
    )
};
