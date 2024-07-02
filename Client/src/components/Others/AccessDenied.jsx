import React from 'react';

const AccessDenied = () => {
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
                    403 - ACCESS DENIED
                </div>
                <div style={styles.subtitle}>
                    Oops, You don't have permission to access this page.
                </div>
                <div style={styles.isi}>
                    A web server may return a 403 Forbidden HTTP status code in response to a request from a client for a web page or resource to indicate that the server can be reached and understood the request, but refuses to take any further action. Status code 403 responses are the result of the web server being configured to deny access, for some reason, to the requested resource by the client.
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

export default AccessDenied;
