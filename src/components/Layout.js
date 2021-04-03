import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Footer } from '.';

const Layout = ({ children }) => {
    // let history = useHistory();

    return (
        <React.Fragment>
            <div className="app">
                <div className="app-wrapper">{children}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;