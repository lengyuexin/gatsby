import React from 'react';
import { Link } from 'gatsby';
import { scale } from '../../utils/typography';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

export default ({
    location,
    themeToggle: onThemeToggle,
    theme
}) => {

    const menus = [{
        name: (
            <Link to={'/'} style={{
                boxShadow: 'none',
                alignItems: 'center'
            }}>首页 / HOME</Link>
        ),
        path: '/'
    }, {
        name: (
            <Link to={'/blog'} style={{
                boxShadow: 'none',
                alignItems: 'center'
            }}>博客 / BLOG</Link>
        ),
        path: '/blog'
    }, {
        name: (
            <a
              href="https://github.com/Irislm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                boxShadow: 'none'
              }}
            >
              Github
            </a>
        ),
        path: '/reading'
    }, {
        name: (
            <a
                href="https://weibo.com/liduolm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                boxShadow: 'none'
                }}
            >
                Weibo 
            </a>
        ),
        path: '/music'
    }, {
        name: (
            <div onClick={onThemeToggle} style={{ //eslint-disable-line
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <span style={{marginRight: '2px', marginTop: '-1px'}}>{theme === 'light' ? '早安' : '晚安'}</span>
                {theme === 'light' ? (
                    <img
                        src={sun}
                        width="18"
                        height="18"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                        alt="light mode"
                    />
                ) : (
                    <img 
                        src={moon}
                        width="18"
                        height="18"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                        alt="dark mode"
                    />
                )}
            </div>
        ),
        path: ''
    }];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
            }}>
                {
                    menus.map((v, idx) => (
                        <li style={{
                            display: "flex",
                            marginLeft: '1rem',
                            marginRight: '1rem',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '0.5rem',
                            borderTop: location && location.pathname === v.path ? '3px solid var(--textLink)' : '',
                            borderBottom: 'none'
                        }} key={idx}>
                            {v.name}
                        </li>
                    ))
                }
            </ul>
            <div>
                <h1
                    style={{
                        ...scale(0.75),
                        marginBottom: 0,
                        marginTop: 0,
                        float: 'right'
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'var(--textTitle)',
                        }}
                        to={'/'}
                    >
                        Iris
                    </Link>
                </h1>
                <br />
                <h1
                    style={{
                        ...scale(0.75),
                        marginBottom: 0,
                        float: 'right',
                        marginTop: -10
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'var(--textTitle)',
                        }}
                        to={'/'}
                    >
                        mmr
                    </Link>
                </h1>
            </div>
        </div>
    )
}