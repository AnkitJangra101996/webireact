import React, { useState } from 'react';

function Footer() {

    let year = new Date().getFullYear();

    return (
        <>
            <footer className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light shadow-lg  bg-body text-center justify-content-center">
                <h6 className="fw-normal">© Copyright {year} WebiRect. All Right Reserved.</h6>
            </footer>
        </>
    )
}

export default Footer
