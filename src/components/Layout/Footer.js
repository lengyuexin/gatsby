import React from 'react';

export default () => {
  return (
    <footer
      style={{
        // position: 'fixed',
        // bottom: 0,
        padding: '1rem',
        borderTop: '1px solid var(--textLink)',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}
    >
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
      <span style={{
        color: 'var(--textLink)',
        paddingRight: '2px',
        paddingLeft: '2px'
      }}>&bull;</span>
      <a
        href="https://weibo.com/liduolm"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: 'none'
        }}
      >
        Weibo 
      </a>{' '}
    </footer>
  );
};
