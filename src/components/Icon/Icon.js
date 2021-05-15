//route
import React, { useState } from 'react';
import RightNav from '../RightNav/RightNav';
//style
import {
    NavHamburger,
    NavHamburgerLine
}from '../Header/HeaderStyle';

const Icon = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <NavHamburger open={open} onClick={() =>setOpen(!open)}>
            <NavHamburgerLine />
            <NavHamburgerLine />
            <NavHamburgerLine />
                <RightNav open={open} />
            </NavHamburger>
        </>
    );
}

export default Icon;