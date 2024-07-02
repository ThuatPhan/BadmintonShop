import React from 'react';

const PageNotFound = () => {
    const styles = {
        body: {
            fontFamily: "'Raleway', sans-serif",
            backgroundColor: '#342643',
            height: '100vh',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        textWrapper: {
            textAlign: 'center',
        },
        title: {
            fontSize: '5em',
            fontWeight: 700,
            color: '#EE4B5E',
        },
        subtitle: {
            fontSize: '40px',
            fontWeight: 700,
            color: '#1FA9D6',
        },
        isi: {
            fontSize: '18px',
            margin: '30px',
            padding: '20px',
            color: 'white',
        },
        button: {
            margin: '30px',
            fontWeight: 700,
            border: '2px solid #EE4B5E',
            textDecoration: 'none',
            padding: '15px',
            textTransform: 'uppercase',
            color: '#EE4B5E',
            borderRadius: '26px',
            transition: 'all 0.2s ease-in-out',
        },
        buttonHover: {
            backgroundColor: '#EE4B5E',
            color: 'white',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.textWrapper}>
                <div style={styles.title} data-content="404">
                    404 - PAGE NOT FOUND
                </div>
                <div style={styles.subtitle}>
                    Sorry, we couldn't find the page you're looking for.
                </div>
                <div style={styles.isi}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL and try again. If you believe this is an error, you can go back to the homepage.
                </div>
                <a
                    href="/"
                    style={styles.button}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                        e.target.style.color = styles.buttonHover.color;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '';
                        e.target.style.color = styles.button.color;
                    }}
                >
                    Go to homepage
                </a>
            </div>
        </div>
    );
};

export default PageNotFound;
