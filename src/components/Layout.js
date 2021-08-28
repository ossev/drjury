import React from 'react';
import Header from './Header';
import {GlobalStyle} from './styles/GlobalStyles'

const Layout = ({ children }) => {
    return (
    <>
      <GlobalStyle/>
        <Header />
        <div>
            <main>{children}</main>
        </div>
    </>
    );
};
export default Layout;