//scss
import './Main.scss';
//route
import React from 'react';

//structure Main
const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    );
}

export default Main;